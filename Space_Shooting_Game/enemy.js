export default class Enemy {

    constructor(x, y, imageNumber) {
        this.x = x;
        this.y = y;
        this.width = 44;
        this.height = 32;
    
        this.image = new Image();
        this.image.src = `images/alien${imageNumber}.png`;
      }
      move(xVelocity, yVelocity) {
        this.x += xVelocity;
        this.y += yVelocity;
      }
      draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      }
      collideWith(alien) {
        if (
          this.x + this.width > alien.x &&
          this.x < alien.x + alien.width &&
          this.y + this.height > alien.y &&
          this.y < alien.y + alien.height
        ) {
          return true;
        } else {
          return false;
        }
      }
}