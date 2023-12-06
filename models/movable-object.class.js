class MovableObject extends DrawableObject {

  speed = 0.15;
  speedY = 0.15;
  buoyancy = 0.05;
  otherDirection = false;
  hp = 10;
  coins = 0;
  posions = 10;
  lastHit = 0;
  lastMove = new Date().getTime();


  isColliding(mo) {
    return (this.x + this.width) >= mo.x && this.x <= (mo.x + mo.width) &&
      (this.y + this.height) >= mo.y &&
      (this.y) <= (mo.y + mo.height);
  }

  hit() {
    this.hp -= 1;
    if (this.hp < 0) {
      this.hp = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    return timepassed < 2000;
  }

  isDead() {
    return this.hp == 0;
  }

  isIdle() {
    let timepassed = new Date().getTime() - this.lastMove;
    return timepassed > 5000;
  }

  hasPosion() {
    return world.character.posions > 0;
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

  applyBuoyancy() {
    setInterval(() => {
      if (this.isUnderWater() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY += this.buoyancy;
      }
    }, 1000 / 25);
  }

  isUnderWater() {
    return this.y > -200;
  }
}



