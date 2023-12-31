class World {
  character = new Character();
  level = level1;
  canvas;
  keyboard;
  sound = true;
  hpBarEndboss;
  ctx;
  camera_x = 0;
  shootableObjects = [];
  intervalIds = [];
  meleeAttack = new MeleeAttack(this.character);
  gameOver = false;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;

    this.draw();
    this.setWorld();
    this.run();
  }

  /**
   * deletes the old character and creates a new one
   */
  resetCharacter() {
    this.character = null;
    this.character = new Character();
  }

  setWorld() {
    this.character.world = this;
    this.meleeAttack.world = this;
    this.hpBarEndboss = this.level.statusbars.find(bar => bar instanceof HpBarEndboss);
  }

  run() {
    this.setStoppableInterval(() => this.checkCollisions(), 1000 / 60);
  }

  checkCollisions() {
    this.collisionCharacterEnemy();
    this.collisionCharacterColletible();
    this.collisionMelleAttackFish();
    this.collisionBubbleJellyFish();
    this.collisionBubbleEndboss();
  }

  /**
   * checks the collision between the character and the enemy 
   * to determine the type of damage inflicted on the character
   */
  collisionCharacterEnemy() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy) && !enemy.isDead()) {
        this.character.hit(1);
        if (enemy instanceof GreenFish || enemy instanceof RedFish || enemy instanceof Endboss) {
          this.character.lastDamage = "poisoned"
        }
        if (enemy instanceof JellyFishYellow || enemy instanceof JellyFishGreen) {
          this.character.lastDamage = "shocked"
        }
      };
    });
  }

  /**
   * checks the collision between the character and collectable objects 
   * to give them to the character and if the object has been collected to delete it
   */
  collisionCharacterColletible() {
    this.level.collectibles = this.level.collectibles.filter((collectible) => {
      if (this.character.isColliding(collectible)) {
        if (collectible instanceof Poison) {
          this.character.addPoison(this.item_pickup_sound);
        }
        if (collectible instanceof Coin) {
          this.character.addCoin(this.coin_sound, this.level_up_sound);
        }
        return false;
      }
      return true;
    });
  }

  /**
   * checks the collision between the melee attack hit box and the fish
   */
  collisionMelleAttackFish() {
    this.level.enemies.forEach((enemy) => {
      if (this.meleeAttack.isColliding(enemy) && this.keyboard.SPACE && !this.character.attackCooldown(800)) {
        if (enemy instanceof GreenFish || enemy instanceof RedFish) {
          setTimeout(() => {
            enemy.hit(10);
            this.fish_hit_sound.play();
          }, 800);
        }
      }
    });
  }

  /**
   * checks the collision between the bubble and the jellyfish and 
   * if a bubble hits a jellyfish the bubble is deleted
   */
  collisionBubbleJellyFish() {
    this.shootableObjects = this.shootableObjects.filter((bubble) => {
      let collidesWithEnemy = false;
      this.level.enemies.forEach((enemy) => {
        if (bubble.isColliding(enemy)) {
          if (enemy instanceof JellyFishYellow || enemy instanceof JellyFishGreen) {
            enemy.hit(10);
            enemy.deathDirection = bubble.bubbleOtherDirection;
            this.jellyfish_hit_sound.play();
            collidesWithEnemy = true;
          }
        }
      });
      return !collidesWithEnemy;
    });
  }

  /**
   * checks the collision between the bubble and the endboss,
   * if a bubble hits the endboss it will be deleted, and 
   * the endboss will be damaged depending on the type of bubble
   */
  collisionBubbleEndboss() {
    this.shootableObjects = this.shootableObjects.filter((bubble) => {
      let collidesWithEnemy = false;
      this.level.enemies.forEach((enemy) => {
        if (bubble.isColliding(enemy)) {
          if (enemy instanceof Endboss) {
            collidesWithEnemy = true;
            enemy.hit(bubble.damage);
            this.endboss_hit_sound.play();
            if (this.hpBarEndboss) {
              this.hpBarEndboss.setPrecentage(enemy.hp);
            }
          }
        }
      });
      return !collidesWithEnemy;
    });
  }

  /**
   * creates a new bubble in the direction in which the chracter is facing
   */
  checkShootObjects() {
    let bubblePosition = 0
    if (!this.character.otherDirection) {
      bubblePosition = 120
    }
    let bubble = new ShootableObject(this.character.x + bubblePosition, this.character.y + 50);
    this.shootableObjects.push(bubble)
    this.bubble_sound.play();
  }

  /**
   * draws everything on the canvas
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.collectibles);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.shootableObjects);
    this.addToMap(this.character);
    this.addToMap(this.meleeAttack);
    this.ctx.translate(-this.camera_x, 0);
    this.addObjectsToMap(this.level.statusbars);
    this.ctx.translate(this.camera_x, 0);
    this.ctx.translate(-this.camera_x, 0);
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx)
    mo.drawText(this.ctx, this.character.posions, 75)
    mo.drawText(this.ctx, this.character.hp, 170)
    mo.drawText(this.ctx, this.character.coins, 290)
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    this.ctx.restore();
    mo.x = mo.x * -1;
  }

  /**
   * adds an interval to the functions and stores the id of the intervals in an array
   * @param {function} fn - function which is to be executed in intervals
   * @param {number} time - interval time
   */
  setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    this.intervalIds.push(id);
  }

  /**
   * stops all intervals
   */
  clearAllIntervals() {
    this.intervalIds.forEach(interval => { clearInterval(interval); });
    this.character.intervalIds.forEach(interval => { clearInterval(interval); });
    this.level.enemies.forEach(enemy => {
      enemy.intervalIds.forEach(interval => { clearInterval(interval); })
    });
    this.level.collectibles.forEach(collectible => {
      collectible.intervalIds.forEach(interval => { clearInterval(interval); })
    })
  }

  /**
   * restart all intervals
   */
  resumeAllIntervals() {
    this.run();
    this.character.animate();
    this.level.enemies.forEach(enemy => {
      enemy.animate()
    })
    this.level.collectibles.forEach(collectible => {
      collectible.animate()
    })
  }
}


