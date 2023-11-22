class OrangeFish extends MovableObject {
  width = 80;
  height = 80;
  IMAGES_SWIMMING = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png",
  ];

  constructor() {
    super().loadeImage(this.IMAGES_SWIMMING[0]);
    this.loadImages(this.IMAGES_SWIMMING);

    this.x = 200 + Math.random() * 500;
    this.speed = 0.15 + Math.random() * 0.25;

    this.animate();
  }

  animate() {
    this.moveLeft();
    setInterval(() => {
      this.playAnimation(this.IMAGES_SWIMMING);
    }, 200);
  }
}
