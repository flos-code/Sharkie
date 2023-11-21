class World {
  character = new Character();
  enemies = [new Fish(), new Fish(), new Fish()];
  backgroundObjects = [
    new BackgroundObject("./img/3. Background/Layers/5. Water/L1.png", 0),
    new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/L1.png", 0),
    new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/L1.png", 0),
    new BackgroundObject("./img/3. Background/Layers/2. Floor/L1.png", 0),
    new BackgroundObject("./img/3. Background/Layers/1. Light/1.png", 0),
    // new BackgroundObject("./img/3. Background/Layers/2. Floor/L2.png", 720),
    // new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/L2.png", 720),
    // new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/L2.png", 720),
  ];

  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.addObjectsToMap(this.backgroundObjects);
    this.addToMap(this.character);
    this.addObjectsToMap(this.enemies);

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
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
  }
}
