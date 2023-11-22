class Poison extends MovableObject {
  width = 80;
  height = 80;
  x = 800;
  y = 300;
  IMAGES_POISON = [
    "./img/4. Marcadores/Posiขn/Animada/1.png",
    "./img/4. Marcadores/Posiขn/Animada/2.png",
    "./img/4. Marcadores/Posiขn/Animada/3.png",
    "./img/4. Marcadores/Posiขn/Animada/4.png",
    "./img/4. Marcadores/Posiขn/Animada/5.png",
    "./img/4. Marcadores/Posiขn/Animada/6.png",
    "./img/4. Marcadores/Posiขn/Animada/7.png",
    "./img/4. Marcadores/Posiขn/Animada/8.png",
  ];

  constructor() {
    super().loadeImage(this.IMAGES_POISON[0]);
    this.loadImages(this.IMAGES_POISON);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_POISON);
    }, 200);
  }
}
