class Endboss extends MovableObject {
  height = 500;
  width = 400;
  speed = 0;
  speedY = 0;
  offsetX = 20;
  offsetY = 150;
  widthOffset = 50;
  heightOffset = 220;
  attack = false;
  lastAttack = new Date().getTime();
  animationIndex = 0;

  y = -60;
  hp = 100;
  hpBarEndboss;

  IMAGES_SPAWNING = [
    "./img/2.Enemy/3 Final Enemy/1.Introduce/1.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/2.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/3.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/4.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/5.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/6.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/7.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/8.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/9.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/10.png"
  ]

  IMAGES_SWIMMING = [
    "./img/2.Enemy/3 Final Enemy/2.floating/1.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/2.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/3.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/4.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/5.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/6.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/7.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/8.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/9.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/10.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/11.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/12.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/13.png"
  ];

  IMAGES_HURT = [
    "./img/2.Enemy/3 Final Enemy/Hurt/1.png",
    "./img/2.Enemy/3 Final Enemy/Hurt/2.png",
    "./img/2.Enemy/3 Final Enemy/Hurt/3.png",
    "./img/2.Enemy/3 Final Enemy/Hurt/4.png"
  ];

  IMAGES_DEAD = [
    "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png",
    "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png",
    "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png",
    "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png",
    "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png"
  ];

  IMAGES_ATTACK = [
    "./img/2.Enemy/3 Final Enemy/Attack/1.png",
    "./img/2.Enemy/3 Final Enemy/Attack/2.png",
    "./img/2.Enemy/3 Final Enemy/Attack/3.png",
    "./img/2.Enemy/3 Final Enemy/Attack/4.png",
    "./img/2.Enemy/3 Final Enemy/Attack/5.png",
    "./img/2.Enemy/3 Final Enemy/Attack/6.png"
  ]

  hadFirstContact = false;

  constructor() {
    super().loadeImage(this.IMAGES_SWIMMING[0]);
    this.loadImages(this.IMAGES_SWIMMING);
    this.loadImages(this.IMAGES_SPAWNING);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_ATTACK);
    this.x = 5000;
    this.animate();

  }

  animate() {
    let i = 0;

    setInterval(() => {

      if (this.hadFirstContact && world.character.x - this.x > 0 + 100 && !this.isDead()) {
        this.moveRight();
        this.otherDirection = true;
      }
      if (this.hadFirstContact && world.character.x - this.x < 0 + 100 && !this.isDead()) {
        this.moveLeft();
        this.otherDirection = false;
      }
      if (this.hadFirstContact && world.character.y - this.y < 0 + 200 && !this.isDead()) {
        this.moveUp();
      }
      if (this.hadFirstContact && world.character.y - this.y > 0 + 200 && !this.isDead()) {
        this.moveDown();
      }

      // if (!this.attackCooldown(3000)) {
      //   this.attack = true;
      // }
    }, 1000 / 60);

    setInterval(() => {
      if (i < 10) {
        this.playAnimation(this.IMAGES_SPAWNING);
        if (this.hadFirstContact) {
          setTimeout(() => {
            this.x = 3500;
            this.hpBarEndboss.x = 500;
          }, 300);
          setTimeout(() => {
            this.speed = 0.1;
            this.speedY = 0.1;
            this.attack = true;
            this.lastAttack = new Date().getTime();
          }, 1500);

        }
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
      } else if (this.isDead()) {
        this.playAnimation(this.IMAGES_DEAD);
        world.endboss_dead_sound.play();
      } else if (this.attack && this.hadFirstContact) {
        this.playAnimation(this.IMAGES_ATTACK);
        this.animationIndex++;
        this.offsetX = 0;
        this.speed = this.speed * 1.5;
        this.speedY = this.speedY * 1.5;
        if (this.animationIndex = this.IMAGES_ATTACK.length) {
          this.animationIndex = 0;
          this.offsetX = 20;
          this.attack = false;
          this.lastAttack = new Date().getTime();
          world.endboss_attack_sound.play();
        }
      } else {
        this.playAnimation(this.IMAGES_SWIMMING);
        // schwmmt noch vor  dem spawnen
      }
      i++;
      if (world && world.character.x > 3000 && !this.hadFirstContact) {
        i = 0;
        this.hadFirstContact = true;
        this.hpBarEndboss = world.level.statusbars.find(bar => bar instanceof HpBarEndboss);
        world.bossfight_sound.play();
      }
      if (!this.attackCooldown(3000)) {
        this.attack = true;
      }

    }, 200);
  }
}
