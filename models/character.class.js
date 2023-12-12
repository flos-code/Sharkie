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
  attackPossible = false;




  IMAGES_SWIMMING = [
    "./img/1.Sharkie/3.Swim/1.png",
    "./img/1.Sharkie/3.Swim/2.png",
    "./img/1.Sharkie/3.Swim/3.png",
    "./img/1.Sharkie/3.Swim/4.png",
    "./img/1.Sharkie/3.Swim/5.png",
    "./img/1.Sharkie/3.Swim/6.png"
  ];

  IMAGES_DEAD_POISONED = [
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

  IMAGES_HURT_POISONED = [
    "./img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
    "./img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "./img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "./img/1.Sharkie/5.Hurt/1.Poisoned/4.png"
  ];

  IMAGES_DEAD_SHOCK = [
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
  swimming_sound;
  poisoned_sound;
  shock_sound;
  melee_sound;
  idle_sound;




  constructor() {
    super().loadeImage("./img/1.Sharkie/3.Swim/1.png");
    this.loadImages(this.IMAGES_SWIMMING);
    this.loadImages(this.IMAGES_DEAD_POISONED);
    this.loadImages(this.IMAGES_HURT_POISONED);
    this.loadImages(this.IMAGES_DEAD_SHOCK);
    this.loadImages(this.IMAGES_HURT_SHOCK);
    this.loadImages(this.IMAGES_RANGE_ATTACK_POISON);
    this.loadImages(this.IMAGES_RANGE_ATTACK);
    this.loadImages(this.IMAGES_MELEE_ATTACK);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_IDLE_LONG);
    this.animate();

  }

  animate() {



    setInterval(() => {

      this.swimming_sound.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
        this.swimming_sound.play();
        this.idle_sound.pause();
      }
      if (this.world.keyboard.LEFT && this.x > 0) {
        this.moveLeft();
        this.otherDirection = true;
        this.swimming_sound.play();
        this.idle_sound.pause();
      }
      if (this.world.keyboard.UP && this.y > -50) {
        this.moveUp();
        this.swimming_sound.play();
        this.idle_sound.pause();
      }

      if (this.world.keyboard.DOWN && this.y < 480 - 130) {
        this.moveDown();
        this.swimming_sound.play();
        this.idle_sound.pause();
      }
      if (this.world.keyboard.SPACE && !this.attackCooldown(800)) {
        this.attackPossible = true;
        this.melee_sound.play();
        this.idle_sound.pause();
      }



      if (this.world.keyboard.D && !this.attackCooldown(800)) {
        if (this.posions > 0) {
          this.playAnimation(this.IMAGES_RANGE_ATTACK_POISON);
          this.idle_sound.pause();
        } else {
          this.playAnimation(this.IMAGES_RANGE_ATTACK);
          this.idle_sound.pause();
          //sound idle
        }



      }


      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (!this.world.keyboard.RIGHT && !this.world.keyboard.LEFT && !this.world.keyboard.UP && !this.world.keyboard.DOWN && !this.isHurt() && !this.isDead() && !this.isIdle()) {
        this.playAnimation(this.IMAGES_IDLE);
      }
      if (!this.world.keyboard.RIGHT && !this.world.keyboard.LEFT && !this.world.keyboard.UP && !this.world.keyboard.DOWN && !this.isHurt() && !this.isDead() && this.isIdle()) {
        this.playAnimation(this.IMAGES_IDLE_LONG);
        this.idle_sound.play();
      }
    }, 1000 / 8);

    setInterval(() => {
      if (this.isDead() && this.lastDamage == "poisoned") {
        this.playAnimation(this.IMAGES_DEAD_POISONED);
      } else if (this.isDead() && this.lastDamage == "shocked") {
        this.playAnimation(this.IMAGES_DEAD_SHOCK);
      } else if (this.isHurt() && this.lastDamage == "poisoned") {
        this.playAnimation(this.IMAGES_HURT_POISONED);
        this.poisoned_sound.play();
      } else if (this.isHurt() && this.lastDamage == "shocked") {
        this.playAnimation(this.IMAGES_HURT_SHOCK);
        this.shock_sound.play();
      } else if (
        this.world.keyboard.RIGHT ||
        this.world.keyboard.LEFT ||
        this.world.keyboard.UP ||
        this.world.keyboard.DOWN
      ) {
        this.playAnimation(this.IMAGES_SWIMMING);
        this.lastMove = new Date().getTime();
      } else if (this.world.keyboard.SPACE && !this.attackCooldown(800) && this.attackPossible) {
        this.playAnimation(this.IMAGES_MELEE_ATTACK)
        this.animationIndex++;
        if (this.animationIndex = this.IMAGES_MELEE_ATTACK.lengt) {
          this.animationIndex = 0;
          this.attackPossible = false;
        }
        this.lastAttack = new Date().getTime();
        this.lastMove = new Date().getTime();
      } else if (this.world.keyboard.D && !this.attackCooldown(800) && this.attackPossible && this.hasPosion()) {
        this.playAnimation(this.IMAGES_RANGE_ATTACK_POISON)
        this.animationIndex++;
        if (this.animationIndex = this.IMAGES_RANGE_ATTACK_POISON.lengt) {
          this.animationIndex = 0;
          this.attackPossible = false;

        }
        this.lastAttack = new Date().getTime();
        this.lastMove = new Date().getTime();

      } else if (this.world.keyboard.D && !this.attackCooldown(800) && this.attackPossible) {
        this.playAnimation(this.IMAGES_RANGE_ATTACK)
        this.animationIndex++;
        if (this.animationIndex = this.IMAGES_RANGE_ATTACK.lengt) {
          this.animationIndex = 0;
          this.attackPossible = false;

        }
        this.lastAttack = new Date().getTime();
        this.lastMove = new Date().getTime();
      }

    }, 200);


  }






}
