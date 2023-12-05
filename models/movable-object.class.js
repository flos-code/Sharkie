class MovableObject {
  x = 120;
  y = 250;
  img;
  height = 150;
  width = 100;
  imageCache = {};
  currenImage = 0;
  speed = 0.15;
  speedY = 0.15;
  otherDirection = false;

  loadeImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  playAnimation(images) {
    let i = this.currenImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currenImage++;
  }

  moveRight() {

  }

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }

  moveUpDown() {
    let direction = 1; // 1 for moving up, -1 for moving down

    setInterval(() => {
      // Update y position based on direction
      this.y += direction * this.speedY;

      // Check if y reaches upper or lower bound, change direction accordingly
      if (this.y <= 20 || this.y >= 380) {
        direction *= -1; // Reverse the direction
      }
    }, 1000 / 60);
  }
}
