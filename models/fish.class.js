class Fish extends MovableObject {
  width = 80;
  height = 80;
  constructor() {
    super().loadeImage(
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png"
    );

    this.x = 200 + Math.random() * 500;
  }
}
