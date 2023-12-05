class GreenFish extends MovableObject {
  form;

  IMAGES_SWIMMING = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png",
  ];

  IMAGES_SWIMMING_BIG = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png",
  ];

  constructor(x, y, form) {
    super().loadeImage(this.IMAGES_SWIMMING[0]);
    this.form = form;

    if (this.form === "big") {
      this.loadImages(this.IMAGES_SWIMMING_BIG);
      this.width = 80;
      this.height = 80;
    } else {
      this.loadImages(this.IMAGES_SWIMMING);
      this.width = 60;
      this.height = 60;
    }
    this.x = x;
    this.y = y;
    this.speed = 0.15;

    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);


    setInterval(() => {
      if (this.form === "big") {
        this.playAnimation(this.IMAGES_SWIMMING_BIG);
      } else {
        this.playAnimation(this.IMAGES_SWIMMING);
      }
    }, 200);
  }
}
