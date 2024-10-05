import Enemy from "./enemy.js";
import MovingDirection from "./enemymove.js";

export default class EnemyController {
    enemyMap=[];
    enemyRows=[];
    currentDirection = MovingDirection.right;
    xVelocity = 0;
    yVelocity = 0;
    defaultXVelocity = 0.8;
    defaultYVelocity = 0.8;
    moveDownTimerDefault = 30;
    moveDownTimer = this.moveDownTimerDefault;
    fireBulletTimerDefault = 100;
    fireBulletTimer = this.fireBulletTimerDefault;

    constructor(canvas, enemyBulletController, playerbulletcontroller){
        this.canvas= canvas;
        this.generateRandomMap();
        this.createEnemies();
        this.playerbulletcontroller= playerbulletcontroller;
        this.enemyBulletController = enemyBulletController;
        this.enemyDeathSound= new Audio("sounds/enemy-death.wav");
        this.enemyDeathSound.volume= 0.5;
    }
    generateRandomMap() 
    {
      for (let row = 0; row < 5; row++) 
      {
        const newRow = [];
        for (let col = 0; col < 19; col++) 
        {
          const randomNumber = Math.floor(Math.random() * 10) + 1;
          newRow.push(randomNumber);
        }
        this.enemyMap.push(newRow);
      }
    }
    
    draw(ctx){
        this.decrementMoveDownTimer();
        this.updateVelocityandDirection();
        this.collisionDetection();
        this.drawEnemies(ctx);
        this.resetMoveDownTimer();
        this.fireBullet();
    }
    createEnemies() {
        this.enemyMap.forEach((row, rowIndex) => {
          this.enemyRows[rowIndex] = [];
          row.forEach((enemyNumber, enemyIndex) => {
            if (enemyNumber > 0) {
              this.enemyRows[rowIndex].push(
                new Enemy(enemyIndex * 60, rowIndex * 45, enemyNumber)
              );
            }
          });
        });
      }

      drawEnemies(ctx) {
        this.enemyRows.flat().forEach((enemy) => {
          enemy.move(this.xVelocity, this.yVelocity);
          enemy.draw(ctx);
        });
      }
      updateVelocityandDirection(){
        for (const enemyRow of this.enemyRows) {
            if (this.currentDirection == MovingDirection.right) {
              this.xVelocity = this.defaultXVelocity;
              this.yVelocity = 0;
              const rightMostEnemy = enemyRow[enemyRow.length - 1];
              if (rightMostEnemy.x + rightMostEnemy.width >= this.canvas.width) {
                this.currentDirection = MovingDirection.downLeft;
                break;
              }
            } 
            else if (this.currentDirection === MovingDirection.downLeft) {
              if (this.moveDown(MovingDirection.left)) {
                break;
              }
            }
            else if (this.currentDirection === MovingDirection.left) {
              this.xVelocity = -this.defaultXVelocity;
              this.yVelocity = 0;
              const leftMostEnemy = enemyRow[0];
              if (leftMostEnemy.x <= 0) {
                this.currentDirection = MovingDirection.downRight;
                break;
              }
            }
            else if (this.currentDirection === MovingDirection.downRight) {
              if (this.moveDown(MovingDirection.right)) {
                break;
              }
            }
          }
      }
      moveDown(newDirection) {
        this.xVelocity = 0;
        this.yVelocity = this.defaultYVelocity;
        if (this.moveDownTimer <= 0) {
          this.currentDirection = newDirection;
          return true;
        }
        return false;
      }
      resetMoveDownTimer() {
        if (this.moveDownTimer <= 0) {
          this.moveDownTimer = this.moveDownTimerDefault;
        }
      }
    
      decrementMoveDownTimer() {
        if (this.currentDirection === MovingDirection.downLeft || this.currentDirection === MovingDirection.downRight) {
          this.moveDownTimer--;
        }
      }
      fireBullet() {
        this.fireBulletTimer--;
        if (this.fireBulletTimer <= 0) {
          this.fireBulletTimer = this.fireBulletTimerDefault;
          const allEnemies = this.enemyRows.flat();
          const enemyIndex = Math.floor(Math.random() * allEnemies.length);
          const enemy = allEnemies[enemyIndex];
          this.enemyBulletController.shoot(enemy.x + enemy.width / 2, enemy.y, -3);
        }
      }
      collisionDetection() {
        this.enemyRows.forEach((enemyRow) => {
          enemyRow.forEach((enemy, enemyIndex) => {
            if (this.playerbulletcontroller.collideWith(enemy)) {
              this.enemyDeathSound.currentTime = 0;
              this.enemyDeathSound.play();
              enemyRow.splice(enemyIndex, 1);
            }
          });
        });
    
        this.enemyRows = this.enemyRows.filter((enemyRow) => enemyRow.length > 0); //to remove empty rows
      }
      collideWith(alien) {
        return this.enemyRows.flat().some((enemy) => enemy.collideWith(alien));
      }
}
