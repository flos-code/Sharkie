class JellyFishGreen extends MovableObject {
  width = 80;
  height = 80;
  hp = 10;
  speed = 0;
  centerX = 200;
  radius = 100;
  angle = 0;

  IMAGES_SWIMMING = [
    "./img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 1.png",
    "./img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 2.png",
    "./img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 3.png",
    "./img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 4.png"
  ];

  IMAGES_DEAD = [
    "./img/2.Enemy/2 Jelly fish/Dead/green/g1.png",
    "./img/2.Enemy/2 Jelly fish/Dead/green/g2.png",
    "./img/2.Enemy/2 Jelly fish/Dead/green/g3.png",
    "./img/2.Enemy/2 Jelly fish/Dead/green/g4.png"
  ]

  constructor(centerX, centerY, rotationDirection) {
    super().loadeImage(this.IMAGES_SWIMMING[0]);
    this.loadImages(this.IMAGES_SWIMMING);
    this.loadImages(this.IMAGES_DEAD);

    this.rotationDirection = rotationDirection;
    this.centerX = centerX;
    this.centerY = centerY;

    // this.x = this.centerX + this.radius * Math.cos(this.angle);
    // this.y = this.centerY + this.radius * Math.sin(this.angle);

    this.animate();


  }

  animate() {

    setInterval(() => {

      this.angle += 0.01 * this.rotationDirection;

      this.x = this.centerX + this.radius * Math.cos(this.angle);
      this.y = this.centerY + this.radius * Math.sin(this.angle);

    }, 1000 / 60);




    setInterval(() => {
      if (this.isDead()) {
        this.rotationDirection = 0;
        if (!world.character.otherDirection) {
          this.speed = -5;
        } else {
          this.speed = 5;
        }
        this.speedY = 1;
        this.moveLeft();
        this.applyBuoyancy();
        this.playAnimation(this.IMAGES_DEAD)
      } else {

        this.playAnimation(this.IMAGES_SWIMMING);
      }

    }, 200);
  }








}

