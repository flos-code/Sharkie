class Character extends MovableObject {
  width = 300;
  height = 250;

  IMAGES_WALKING = [
    "./img/1.Sharkie/3.Swim/1.png",
    "./img/1.Sharkie/3.Swim/2.png",
    "./img/1.Sharkie/3.Swim/3.png",
    "./img/1.Sharkie/3.Swim/4.png",
    "./img/1.Sharkie/3.Swim/5.png",
    "./img/1.Sharkie/3.Swim/6.png",
  ];
  currenImage = 0;

  constructor() {
    super().loadeImage("./img/1.Sharkie/3.Swim/1.png");
    this.loadImages(this.IMAGES_WALKING);
    this.animate();
  }

  animate() {
    setInterval(() => {
      let i = this.currenImage % this.IMAGES_WALKING.length;
      let path = this.IMAGES_WALKING[i];
      this.img = this.imageCache[path];
      this.currenImage++;
    }, 200);
  }

  jump() {}
}
