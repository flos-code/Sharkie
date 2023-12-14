class RedFish extends MovableObject {
  width = 80;
  height = 80;
  speed = 1;
  speedY = 1;
  hadFirstContact = false;
  startTransform = false;
  isTransformed = false;
  hp = 10;
  animationIndex = 0;



  IMAGES_SWIMMING = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png"
  ];

  IMAGES_SWIMMING_BIG = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png"
  ]

  IMAGES_DEAD = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.png"
  ]

  IMAGES_TRANSFORM = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png"
  ]



  constructor() {
    super().loadeImage(this.IMAGES_SWIMMING[0]);
    this.loadImages(this.IMAGES_SWIMMING);
    this.loadImages(this.IMAGES_SWIMMING_BIG);
    this.loadImages(this.IMAGES_TRANSFORM);
    this.loadImages(this.IMAGES_DEAD);

    this.x = 2960;
    this.y = 30;





    this.animate();
  }

  animate() {
    this.setStoppableInterval(() => this.redFishMovement(), 1000 / 60);
    this.setStoppableInterval(() => this.redFishAnimation(), 200);




  }

  redFishMovement() {

    if (this.hadFirstContact && world.character.x - this.x > 0 - world.character.widthOffset) {
      this.moveRight();
      this.otherDirection = true;
    }
    if (this.hadFirstContact && world.character.x - this.x < 0 - world.character.widthOffset) {
      this.moveLeft();
      this.otherDirection = false;
    }
    if (this.hadFirstContact && world.character.y - this.y < 0 - world.character.offsetY && !this.isDead()) {
      this.moveUp();
    }

    if (this.hadFirstContact && world.character.y - this.y > 0 - world.character.offsetY && !this.isDead()) {
      this.moveDown();
    }

    if (world && world.character.x > 2400 && !this.hadFirstContact) {
      this.hadFirstContact = true;
      this.startTransform = true;
      this.currenImage = 0;
    }
  }

  redFishAnimation() {

    if (this.isDead()) {
      this.speed = 0;
      this.speedY = 1;
      this.applyBuoyancy();
      this.playAnimation(this.IMAGES_DEAD);
    } else if (this.startTransform) {

      this.playAnimation(this.IMAGES_TRANSFORM);
      this.animationIndex++
      if (this.animationIndex == this.IMAGES_TRANSFORM.length) {
        this.animationIndex = 0;
        this.startTransform = false;
        this.isTransformed = true;
      }

    } else if (this.isTransformed) {
      this.playAnimation(this.IMAGES_SWIMMING_BIG);
    } else {
      this.playAnimation(this.IMAGES_SWIMMING);
    }
  }



}
