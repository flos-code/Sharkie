class World {
  character = new Character();
  level = level1;
  canvas;
  keyboard;
  hpBarEndboss;
  ctx;
  camera_x = 0;
  shootableObjects = [];
  meleeAttack = new MeleeAttack(this.character);


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
    setInterval(() => {

      this.checkShootObjects();
    }, 1000 / 25);
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit(1);

      };
    });

    this.level.collectibles = this.level.collectibles.filter((collectible) => {
      if (this.character.isColliding(collectible)) {
        if (collectible instanceof Poison) {
          this.character.addPoison();
        }
        if (collectible instanceof Coin) {
          this.character.addCoin();
        }
        return false; // Exclude the collided collectible
      }
      return true; // Keep non-collided collectibles in the array
    });

    this.level.enemies = this.level.enemies.filter((enemy) => {
      if (this.meleeAttack.isColliding(enemy) && this.keyboard.SPACE && !this.character.attackCooldown()) {
        if (enemy instanceof GreenFish || enemy instanceof RedFish) {
          console.log("hit");
          return false; // Filter out GreenFish and RedFish
        }
      }
      return true;;
    });

    this.shootableObjects = this.shootableObjects.filter((bubble) => {
      let collidesWithEnemy = false;

      this.level.enemies = this.level.enemies.filter((enemy) => {
        if (bubble.isColliding(enemy)) {
          if (enemy instanceof JellyFishYellow) {
            console.log("hit");
            collidesWithEnemy = true;
            return false; // Filter out JellyFishYellow and Endboss
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
            console.log(enemy.hp);
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
    if (this.keyboard.D && !this.character.attackCooldown()) {
      let bubble = new ShootableObject(this.character.x + bubblePosition, this.character.y + 50);
      this.shootableObjects.push(bubble)
    }
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
