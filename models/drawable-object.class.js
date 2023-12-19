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

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  /**
   * draws the number associated with the stat on the canvas
   * @param {CanvasRenderingContext2D} ctx - canvas on which the text should be drawn
   * @param {number} stat - the number belonging to the stats
   * @param {number} x - x position of the text on the canvas
   */
  drawText(ctx, stat, x) {
    if (this instanceof StatusBar) {
      ctx.font = "48px luckiestguy";
      ctx.fillStyle = "white";
      ctx.fillText(stat, x, 65);
    }
  }



}




