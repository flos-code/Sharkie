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
  meleeAttack = new MeleeAttack(this.character);

  coin_sound;
  level_up;
  item_pickup;
  bubble_sound;
  endboss_hit_sound;
  endboss_dead_sound;
  bossfight_sound;
  background_sound;


  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;

    this.hpBarEndboss = this.level.statusbars.find(bar => bar instanceof HpBarEndboss);
    this.draw();
    this.setWorld();
    this.run();

  }

  setWorld() {
    this.character.world = this;
    this.meleeAttack.world = this;

  }

  run() {
    setInterval(() => {
      this.checkCollisions();
    }, 1000 / 60);
    // setInterval(() => {

    //   this.checkShootObjects();
    // }, 1000 / 25);

  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit(1);
        if (enemy instanceof GreenFish || enemy instanceof RedFish || enemy instanceof Endboss) {
          this.character.lastDamage = "poisoned"
        }
        if (enemy instanceof JellyFishYellow || enemy instanceof JellyFishGreen) {
          this.character.lastDamage = "shocked"
        }
      };
    });

    this.level.collectibles = this.level.collectibles.filter((collectible) => {
      if (this.character.isColliding(collectible)) {
        if (collectible instanceof Poison) {
          this.character.addPoison(this.item_pickup);
        }
        if (collectible instanceof Coin) {
          this.character.addCoin(this.coin_sound, this.level_up);
        }
        return false; // Exclude the collided collectible
      }
      return true; // Keep non-collided collectibles in the array
    });

    this.level.enemies = this.level.enemies.filter((enemy) => {
      if (this.meleeAttack.isColliding(enemy) && this.keyboard.SPACE && !this.character.attackCooldown(800)) {
        if (enemy instanceof GreenFish || enemy instanceof RedFish) {
          enemy.hit(10);
        }
      }
      return true;
    });

    this.shootableObjects = this.shootableObjects.filter((bubble) => {
      let collidesWithEnemy = false;

      this.level.enemies = this.level.enemies.filter((enemy) => {
        if (bubble.isColliding(enemy)) {
          if (enemy instanceof JellyFishYellow || enemy instanceof JellyFishGreen) {
            enemy.hit(10);

            collidesWithEnemy = true;

          }
        }
        return true;
      });

      return !collidesWithEnemy;
    });

    this.shootableObjects = this.shootableObjects.filter((bubble) => {
      let collidesWithEnemy = false;

      this.level.enemies = this.level.enemies.filter((enemy) => {
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
        return true;
      });

      return !collidesWithEnemy;
    });

  }

  checkShootObjects() {
    let bubblePosition = 0
    if (!this.character.otherDirection) {
      bubblePosition = 120
    }
    // if (this.keyboard.D && !this.character.attackCooldown(800)) {
    let bubble = new ShootableObject(this.character.x + bubblePosition, this.character.y + 50);
    this.shootableObjects.push(bubble)
    this.bubble_sound.play();
    // }
  }

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
    // --- Fixed Objects ---
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
    mo.drawHitbox(this.ctx)
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
}
