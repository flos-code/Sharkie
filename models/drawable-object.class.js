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

    if (this instanceof Character || this instanceof GreenFish || this instanceof JellyFishYellow) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "blue";
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
      ctx.font = "30px Comic Sans MS";
      ctx.fillStyle = "white";
      // ctx.textAlign = "center";
      ctx.fillText(stat, x, 60);
    }
  }

}




