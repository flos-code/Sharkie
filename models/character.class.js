class Character extends MovableObject {
  width = 180;
  height = 150;
  speed = 10;
  speedY = 10;
  offsetX = 25;
  offsetY = 65;
  widthOffset = 50;
  heightOffset = 90;
  lastDamage;
  animationIndex = 0;
  hadFirstContact = false;
  attackPossibleMelee = false;
  attackPossibleRange = false;
  isAttacking = false;

  deathToPoison = false;
  hasDiedToPosion = false;
  deathToShock = false;
  hasDiedToShock = false;
  startDeath = false;









  IMAGES_SWIMMING = [
    "./img/1.Sharkie/3.Swim/1.png",
    "./img/1.Sharkie/3.Swim/2.png",
    "./img/1.Sharkie/3.Swim/3.png",
    "./img/1.Sharkie/3.Swim/4.png",
    "./img/1.Sharkie/3.Swim/5.png",
    "./img/1.Sharkie/3.Swim/6.png"
  ];

  IMAGES_DEAD_POISONED_ANIMATION = [
    "./img/1.Sharkie/6.dead/1.Poisoned/1.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/2.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/3.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/4.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/5.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/6.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/7.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/8.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/9.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/12.png"
  ];

  IMAGES_DEAD_POISONED = [
    "./img/1.Sharkie/6.dead/1.Poisoned/12.png"
  ];

  IMAGES_HURT_POISONED = [
    "./img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
    "./img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "./img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "./img/1.Sharkie/5.Hurt/1.Poisoned/4.png"
  ];

  IMAGES_DEAD_SHOCK_ANIMATION = [
    "./img/1.Sharkie/6.dead/2.Electro_shock/1.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/2.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/3.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/4.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/5.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/6.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/7.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/8.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/9.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/10.png"
  ];

  IMAGES_DEAD_SHOCK = [
    "./img/1.Sharkie/6.dead/2.Electro_shock/10.png"
  ];

  IMAGES_HURT_SHOCK = [
    "./img/1.Sharkie/5.Hurt/2.Electric shock/1.png",
    "./img/1.Sharkie/5.Hurt/2.Electric shock/2.png",
    "./img/1.Sharkie/5.Hurt/2.Electric shock/3.png"
  ];

  IMAGES_RANGE_ATTACK_POISON = [
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png"
  ];

  IMAGES_RANGE_ATTACK = [
    "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png"
  ];

  IMAGES_MELEE_ATTACK = [
    "./img/1.Sharkie/4.Attack/Fin slap/1.png",
    "./img/1.Sharkie/4.Attack/Fin slap/2.png",
    "./img/1.Sharkie/4.Attack/Fin slap/3.png",
    "./img/1.Sharkie/4.Attack/Fin slap/4.png",
    "./img/1.Sharkie/4.Attack/Fin slap/5.png",
    "./img/1.Sharkie/4.Attack/Fin slap/6.png",
    "./img/1.Sharkie/4.Attack/Fin slap/7.png",
    "./img/1.Sharkie/4.Attack/Fin slap/8.png",
  ];

  IMAGES_IDLE = [
    "./img/1.Sharkie/1.IDLE/1.png",
    "./img/1.Sharkie/1.IDLE/2.png",
    "./img/1.Sharkie/1.IDLE/3.png",
    "./img/1.Sharkie/1.IDLE/4.png",
    "./img/1.Sharkie/1.IDLE/5.png",
    "./img/1.Sharkie/1.IDLE/6.png",
    "./img/1.Sharkie/1.IDLE/7.png",
    "./img/1.Sharkie/1.IDLE/8.png",
    "./img/1.Sharkie/1.IDLE/9.png",
    "./img/1.Sharkie/1.IDLE/10.png",
    "./img/1.Sharkie/1.IDLE/11.png",
    "./img/1.Sharkie/1.IDLE/12.png",
    "./img/1.Sharkie/1.IDLE/13.png",
    "./img/1.Sharkie/1.IDLE/14.png",
    "./img/1.Sharkie/1.IDLE/15.png",
    "./img/1.Sharkie/1.IDLE/16.png",
    "./img/1.Sharkie/1.IDLE/17.png",
    "./img/1.Sharkie/1.IDLE/18.png"
  ];

  IMAGES_IDLE_LONG = [
    "./img/1.Sharkie/2.Long_IDLE/i1.png",
    "./img/1.Sharkie/2.Long_IDLE/I2.png",
    "./img/1.Sharkie/2.Long_IDLE/I3.png",
    "./img/1.Sharkie/2.Long_IDLE/I4.png",
    "./img/1.Sharkie/2.Long_IDLE/I5.png",
    "./img/1.Sharkie/2.Long_IDLE/I6.png",
    "./img/1.Sharkie/2.Long_IDLE/I7.png",
    "./img/1.Sharkie/2.Long_IDLE/I8.png",
    "./img/1.Sharkie/2.Long_IDLE/I9.png",
    "./img/1.Sharkie/2.Long_IDLE/I10.png",
    "./img/1.Sharkie/2.Long_IDLE/I11.png",
    "./img/1.Sharkie/2.Long_IDLE/I12.png",
    "./img/1.Sharkie/2.Long_IDLE/I13.png",
    "./img/1.Sharkie/2.Long_IDLE/I14.png"
  ];

  world;


  constructor() {
    super().loadeImage("./img/1.Sharkie/3.Swim/1.png");
    this.loadImages(this.IMAGES_SWIMMING);
    this.loadImages(this.IMAGES_DEAD_POISONED);
    this.loadImages(this.IMAGES_DEAD_POISONED_ANIMATION);
    this.loadImages(this.IMAGES_HURT_POISONED);
    this.loadImages(this.IMAGES_DEAD_SHOCK);
    this.loadImages(this.IMAGES_DEAD_SHOCK_ANIMATION);
    this.loadImages(this.IMAGES_HURT_SHOCK);
    this.loadImages(this.IMAGES_RANGE_ATTACK_POISON);
    this.loadImages(this.IMAGES_RANGE_ATTACK);
    this.loadImages(this.IMAGES_MELEE_ATTACK);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_IDLE_LONG);
    this.animate();



  }

  animate() {
    this.setStoppableInterval(() => this.characterMovement(), 1000 / 60);
    this.setStoppableInterval(() => this.characterAnimation(), 150);
  }

  characterMovement() {

    world.swimming_sound.pause();
    if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
      this.moveRight();
      this.otherDirection = false;
      world.swimming_sound.play();
      world.idle_sound.pause();
    }
    if (this.world.keyboard.LEFT && this.x > 0) {
      this.moveLeft();
      this.otherDirection = true;
      world.swimming_sound.play();
      world.idle_sound.pause();
    }
    if (this.world.keyboard.UP && this.y > -50) {
      this.moveUp();
      world.swimming_sound.play();
      world.idle_sound.pause();
    }

    if (this.world.keyboard.DOWN && this.y < 480 - 130) {
      this.moveDown();
      world.swimming_sound.play();
      world.idle_sound.pause();
    }
    if (this.world.keyboard.SPACE && !this.attackCooldown(800)) {
      this.attackPossibleMelee = true;
      this.currenImage = 0;
      world.melee_sound.play();
      world.idle_sound.pause();
    }
    if (this.world.keyboard.D && !this.attackCooldown(800)) {
      this.attackPossibleRange = true;
      this.currenImage = 0;
      world.idle_sound.pause();
    }

    if (this.x > 3000 && !this.hadFirstContact) {
      this.hadFirstContact = true;
    }

    if (this.isDead() && this.lastDamage == "poisoned" && !this.startDeath) {
      this.deathToPoison = true;
      this.currenImage = 0;
    }

    if (this.isDead() && this.lastDamage == "shocked" && !this.startDeath) {
      this.deathToShock = true;
      this.currenImage = 0;
    }


    this.world.camera_x = -this.x + 100;
  }

  characterAnimation() {
    if (this.deathToPoison) {
      this.deathAnimation("posion");
    }
    else if (this.hasDiedToPosion) {
      this.playAnimation(this.IMAGES_DEAD_POISONED);
      setTimeout(() => {
        this.gameOver();
      }, 500);
    }
    else if (this.deathToShock) {
      this.deathAnimation("shock");
    }
    else if (this.hasDiedToShock) {
      this.playAnimation(this.IMAGES_DEAD_SHOCK);
      setTimeout(() => {
        this.gameOver();
      }, 500);

    }
    else if (this.isHurt() && this.lastDamage == "poisoned") {
      this.playAnimation(this.IMAGES_HURT_POISONED);
      this.world.poisoned_sound.play();
    }
    else if (this.isHurt() && this.lastDamage == "shocked") {
      this.playAnimation(this.IMAGES_HURT_SHOCK);
      this.world.shock_sound.play();
    }
    else if (
      this.world.keyboard.RIGHT ||
      this.world.keyboard.LEFT ||
      this.world.keyboard.UP ||
      this.world.keyboard.DOWN
    ) {
      this.playAnimation(this.IMAGES_SWIMMING);
      this.lastMove = new Date().getTime();
    }
    else if (this.attackPossibleMelee) {
      this.meleeAttack();
    }
    else if (this.attackPossibleRange) {
      this.rangeAttack();
    }
    else if (this.isIdle()) {
      this.playAnimation(this.IMAGES_IDLE_LONG);
      this.world.background_sound.pause();
      this.world.idle_sound.play();
    }
    else {
      this.playAnimation(this.IMAGES_IDLE);
      if (!this.hadFirstContact) {
        this.world.background_sound.play();
      }
    }

  }


  meleeAttack() {
    this.playAnimation(this.IMAGES_MELEE_ATTACK)

    this.animationIndex++;


    if (this.animationIndex == this.IMAGES_MELEE_ATTACK.length) {
      this.animationIndex = 0;
      this.attackPossibleMelee = false;


    }
    this.lastAttack = new Date().getTime();
    this.lastMove = new Date().getTime();
  }

  rangeAttack() {
    let animationLength;
    if (this.hasPosion()) {
      this.playAnimation(this.IMAGES_RANGE_ATTACK_POISON);

      animationLength = this.IMAGES_RANGE_ATTACK_POISON.length;
    } else {
      this.playAnimation(this.IMAGES_RANGE_ATTACK);
      animationLength = this.IMAGES_RANGE_ATTACK.length;
    }
    this.animationIndex++;

    if (this.animationIndex == animationLength) {
      this.animationIndex = 0;
      this.attackPossibleRange = false;
      this.world.checkShootObjects();

    }
    this.lastAttack = new Date().getTime();
    this.lastMove = new Date().getTime();
  }


  deathAnimation(deathReason) {
    this.animationIndex++;
    this.speed = 0;
    this.speedY = 0;
    if (deathReason == "posion") {
      this.playAnimation(this.IMAGES_DEAD_POISONED_ANIMATION);
      if (this.animationIndex == this.IMAGES_DEAD_POISONED_ANIMATION.length) {
        this.animationIndex = 0;
        this.deathToPoison = false;
        this.hasDiedToPosion = true;
      }
    } else if (deathReason == "shock") {
      this.playAnimation(this.IMAGES_DEAD_SHOCK_ANIMATION);
      if (this.animationIndex == this.IMAGES_DEAD_SHOCK_ANIMATION.length) {
        this.animationIndex = 0;
        this.deathToShock = false;
        this.hasDiedToShock = true;
      }
    }
    this.startDeath = true;
  }

  gameOver() {
    this.world.clearAllIntervals();
    this.world.gameOver = true;
    world.background_sound.pause();
    world.background_sound.currentTime = 0;
    world.bossfight_sound.pause();
    world.bossfight_sound.currentTime = 0;
    world.idle_sound.pause();
    world.idle_sound.currentTime = 0;
    document.getElementById("gameover").classList.remove("d-none");
    document.getElementById("noPause").classList.add("d-none");
    setTimeout(() => {
      document.getElementById("restartButtonGameover").classList.remove("d-none");
    }, 500);
    setTimeout(() => {
      document.getElementById("restartButtonGameover").classList.add("visible");
    }, 1000);
  }


}
