class JellyFishYellow extends MovableObject {
  width = 80;
  height = 80;
  y = 200;
  IMAGES_SWIMMING = [
    "./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png",
    "./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png",
    "./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png",
    "./img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png",
  ];

  constructor(x, y) {
    super().loadeImage(this.IMAGES_SWIMMING[0]);
    this.loadImages(this.IMAGES_SWIMMING);


    this.x = x;
    this.y = y;


    this.speed = 0.8;
    this.speedY = 0.8;
    this.animate();


  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);


    this.moveUpDown();
    setInterval(() => {
      this.playAnimation(this.IMAGES_SWIMMING);
    }, 200);
  }


}
