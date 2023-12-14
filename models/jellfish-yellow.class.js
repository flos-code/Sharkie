class JellyFishYellow extends MovableObject {
  width = 80;
  height = 80;
  y = 200;
  hp = 10;
  direction = 1;

  IMAGES_SWIMMING = [
    "./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png",
    "./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png",
    "./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png",
    "./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png"
  ];

  IMAGES_DEAD = [
    "./img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png",
    "./img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png",
    "./img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png",
    "./img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png"
  ]

  constructor(x, y) {
    super().loadeImage(this.IMAGES_SWIMMING[0]);
    this.loadImages(this.IMAGES_SWIMMING);
    this.loadImages(this.IMAGES_DEAD);


    this.x = x;
    this.y = y;


    this.speed = 0.8;
    this.speedY = 0.8;
    this.animate();


  }

  animate() {
    this.setStoppableInterval(() => this.moveLeft(), 1000 / 60);
    this.setStoppableInterval(() => this.yellowJellyfishMovement(), 1000 / 60);
    this.setStoppableInterval(() => this.yellowJellyfishAnimation(), 200);
  }



  yellowJellyfishMovement() {
    this.y += this.direction * this.speedY;
    if (this.y <= 20 || this.y >= 380) {
      this.direction *= -1; // Reverse the direction
    }
  }

  yellowJellyfishAnimation() {
    if (this.isDead()) {
      this.speed = 0;
      if (!world.character.otherDirection) {
        this.speed = -5;
      } else {
        this.speed = 5;
      }
      this.speedY = 1;
      this.applyBuoyancy();
      this.playAnimation(this.IMAGES_DEAD)
    } else {
      this.playAnimation(this.IMAGES_SWIMMING);
    }

  }


}
