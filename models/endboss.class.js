class Endboss extends MovableObject {
  height = 500;
  width = 400;
  x = 3500;
  y = -60;

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
    "./img/2.Enemy/3 Final Enemy/1.Introduce/10.png",
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
    "./img/2.Enemy/3 Final Enemy/2.floating/13.png",
  ];

  hadFirstContact = false;

  constructor() {
    super().loadeImage(this.IMAGES_SWIMMING[0]);
    this.loadImages(this.IMAGES_SWIMMING);
    this.loadImages(this.IMAGES_SPAWNING);

    this.animate();
  }

  animate() {
    let i = 0;
    setInterval(() => {
      if (i < 10) {
        this.playAnimation(this.IMAGES_SPAWNING);
      } else {
        this.playAnimation(this.IMAGES_SWIMMING);
        // schwmmt noch vor  dem spawnen
      }
      i++;
      if (world.character.x > 3000 && !this.hadFirstContact) {
        i = 0;
        this.hadFirstContact = true;
      }


    }, 200);
  }
}
