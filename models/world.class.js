class World {
  character = new Character();
  level = level1;
  canvas;
  keyboard;
  ctx;
  camera_x = 0;
  shootableObjects = [];


  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkShootObjects();
    }, 200);
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        // this.statusBar.setPrecentage(this.character.hp)
      };
    });
  }

  checkShootObjects() {
    let bubblePosition = 0
    if (!this.character.otherDirection) {
      bubblePosition = 120
    }
    if (this.keyboard.D) {
      let bubble = new ShootableObject(this.character.x + bubblePosition, this.character.y + 50);
      this.shootableObjects.push(bubble)
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.level.backgroundObjects);



    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.collectibles);
    this.addObjectsToMap(this.shootableObjects);
    this.addToMap(this.character);

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
