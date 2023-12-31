class MovableObject extends DrawableObject {

  speed = 0.15;
  speedY = 0.15;
  buoyancy = 0.05;
  otherDirection = false;
  hp = 10;
  coins = 0;
  posions = 0;
  lastHit = 0;

  offsetX = 0;
  offsetY = 0;
  widthOffset = 0;
  heightOffset = 0;
  circularMovementInterval;
  intervalIds = [];
  lastAttack = new Date().getTime();
  lastMove = new Date().getTime();


  /**
   * 
   * @param {object} mo - movable object for which the collsion should be checked
   * @returns boolean, whether a collision takes place
   */
  isColliding(mo) {
    return (
      this.x + this.offsetX + this.width - this.widthOffset >= mo.x + mo.offsetX &&
      this.x + this.offsetX <= mo.x + mo.offsetX + mo.width - mo.widthOffset &&
      this.y + this.offsetY + this.height - this.heightOffset >= mo.y + mo.offsetY &&
      this.y + this.offsetY <= mo.y + mo.offsetY + mo.height - mo.heightOffset
    );

  }

  addCoin(coin_sound, level_up_sound) {
    if (!coin_sound.currentTime == 0) {
      coin_sound.currentTime = 0; // Set currentTime to 0 for restarting
    }
    this.coins++
    coin_sound.play();
    this.addHp(level_up_sound);
  }

  addHp(level_up_sound) {
    if (this.coins == 10) {
      this.coins = 0;
      this.hp++;
      level_up_sound.play();
    }
  }

  addPoison(item_pickup_sound) {
    this.posions++
    item_pickup_sound.play();
  }

  hit(damage) {
    if (!this.isHurt()) {
      this.hp -= damage;
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
    return timepassed > 10000;
  }

  /**
   * 
   * @param {number} cooldown - number of milliseconds before the next attack is possible
   * @returns boolean, whether attack is still on cooldown
   */
  attackCooldown(cooldown) {
    let timepassed = new Date().getTime() - this.lastAttack;
    return timepassed < cooldown;
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
    this.y -= this.speedY;
  }

  moveDown() {
    this.y += this.speedY;
  }

  /**
   * Gives the object buoyancy
   */
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

  /**
   * adds an interval to the functions and stores the id of the intervals in an array
   * @param {function} fn - function which is to be executed in intervals
   * @param {number} time - interval time
   */
  setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    this.intervalIds.push(id);
  }
}



