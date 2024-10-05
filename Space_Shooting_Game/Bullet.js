export default class Bullet {
    constructor(canvas, x, y, velocity, bulletColor) {
      this.canvas = canvas;
      this.x = x;
      this.y = y;
      this.velocity = velocity;
      this.bulletColor = bulletColor;
  
      this.width = 5;
      this.height = 20;
    }
  
    draw(ctx) {
      this.y -= this.velocity; //since canvas axis from top right starts with 0 and increases downwards
      ctx.fillStyle = this.bulletColor;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  
    collideWith(alien) {
      if ( this.x + this.width > alien.x && 
           this.x < alien.x + alien.width &&
           this.y + this.height > alien.y &&
           this.y < alien.y + alien.height)
      {
        return true;
      } 
      else
      {
        return false;
      }
    }
  }