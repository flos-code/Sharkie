class DrawableObject {
  x = 120;
  y = 250;
  img;
  height = 150;
  width = 100;
  imageCache = {};
  currenImage = 0;


  loadeImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawHitbox(ctx) {

    if (this instanceof Character) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x + 25, this.y + 65, this.width - 50, this.height - 90);
      ctx.stroke();
    }

    if (this instanceof Endboss) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x + 20, this.y + 150, this.width - 50, this.height - 220);
      ctx.stroke();
    }

    if (this instanceof GreenFish || this instanceof RedFish || this instanceof JellyFishYellow || this instanceof JellyFishGreen || this instanceof Coin || this instanceof Poison) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "red";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }

    if (this instanceof ShootableObject) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "green";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }

    if (this instanceof MeleeAttack) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "green";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  drawText(ctx, stat, x) {
    if (this instanceof StatusBar) {
      ctx.font = "48px luckiestguy";
      ctx.fillStyle = "white";
      ctx.fillText(stat, x, 65);
    }
  }

  setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
  }

}




