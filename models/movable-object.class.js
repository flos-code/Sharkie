class MovableObject extends DrawableObject {

  speed = 0.15;
  speedY = 0.15;
  buoyancy = 0.05;
  otherDirection = false;
  hp = 10;
  coins = 0;
  posions = 0;
  lastHit = 0;
  lastAttack = new Date().getTime();
  lastMove = new Date().getTime();

  coin_sound = new Audio("./audio/coin_sound.mp3");
  level_up = new Audio("./audio/level_up.mp3");
  item_pickup = new Audio("./audio/item_pickup.mp3");



  isColliding(mo) {
    if (this instanceof Character) {
      // Apply adjustments for character collision
      return (
        (this.x + 25 + this.width - 50) >= mo.x &&
        this.x + 25 <= (mo.x + mo.width) &&
        (this.y + 65 + this.height - 90) >= mo.y &&
        (this.y + 65) <= (mo.y + mo.height)
      );
    } else {
      // Normal collision detection without adjustments
      return (
        this.x + this.width >= mo.x &&
        this.x <= mo.x + mo.width &&
        this.y + this.height >= mo.y &&
        this.y <= mo.y + mo.height
      );
    }
  }

  addCoin() {
    if (!this.coin_sound.currentTime == 0) {

      this.coin_sound.currentTime = 0; // Set currentTime to 0 for restarting
    }

    this.coins++
    this.coin_sound.play();
    if (this.coins == 10) {
      this.coins = 0;
      this.hp++;
      this.level_up.play();
    }
  }

  addPoison() {
    this.posions++
    this.item_pickup.play();
  }

  hit() {
    if (!this.isHurt()) {
      this.hp -= 1;
      if (this.hp < 0) {
        this.hp = 0;
      } else {
        this.lastHit = new Date().getTime();
      }
    }

  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    return timepassed < 1300;
  }

  isDead() {
    return this.hp == 0;
  }

  isIdle() {
    let timepassed = new Date().getTime() - this.lastMove;
    return timepassed > 5000;
  }

  attackCooldown() {
    let timepassed = new Date().getTime() - this.lastAttack;
    return timepassed < 800;
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


  meleeAttack() {



  }
}



