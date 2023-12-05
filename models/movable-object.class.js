class MovableObject {
  x = 120;
  y = 250;
  img;
  height = 150;
  width = 100;
  imageCache = {};
  currenImage = 0;
  speed = 0.15;
  speedY = 0.15;
  otherDirection = false;
  hp = 100;


  loadeImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawHitbox(ctx) {

    if (this instanceof Character || this instanceof GreenFish || this instanceof JellyFishYellow) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }

  isColliding(mo) {
    return (this.x + this.width) >= mo.x && this.x <= (mo.x + mo.width) &&
      (this.y + this.height) >= mo.y &&
      (this.y) <= (mo.y + mo.height);
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  playAnimation(images) {
    let i = this.currenImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currenImage++;
  }

  moveRight() {
    this.x += this.speed;

  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveUp() {
    this.y -= this.speed;
  }

  moveDown() {
    this.y += this.speed;
  }


  moveUpDown() {
    let direction = 1;
    setInterval(() => {
      this.y += direction * this.speedY;
      if (this.y <= 20 || this.y >= 380) {
        direction *= -1; // Reverse the direction
      }
    }, 1000 / 60);
  }

  traceCharacter() {

  }
}



