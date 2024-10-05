import EnemyController from "./enemycontroller.js";
import Player from "./player.js";
import BulletController from "./bulletcontroller.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const canvasContainer = document.getElementById("canvas-container");

// canvas.width = 1200;
// canvas.height = 600;
function setCanvasDimensions() {
    canvas.width = canvasContainer.clientWidth;
    canvas.height = canvasContainer.clientHeight;
  }
  
  // Initial setup
  setCanvasDimensions();
  
  // Update canvas dimensions when the window is resized
window.addEventListener("resize", setCanvasDimensions);

const background = new Image();
background.src = "images/space.png";

const restartButton = document.getElementById("restart");

const enemybulletcontroller= new BulletController(canvas,4,"yellow",false);
const playerbulletcontroller= new BulletController(canvas,8,"red",true);
const enemyController= new EnemyController(canvas,enemybulletcontroller,playerbulletcontroller);
const playerno= Math.floor(Math.random() * 9) + 1
const player = new Player(canvas,3,playerbulletcontroller,playerno);
let introductionElement= "Press Enter to start the game";
ctx.font = "70px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.fillText(introductionElement, canvas.width/2, canvas.height / 2);

let startgame=false;
let isgameover=false;
let win= false;

window.addEventListener("keypress", function (event) {
    if(event.key=="Enter"){
        if (!startgame) {
            // introductionElement.style.opacity = 0;
            startgame = true;
            window.requestAnimationFrame(game);
        }
    }
  });
restartButton.addEventListener("click", function (event) {
    event.preventDefault();
    location.reload();
    startgame = true;
    restartButton.style.display = "none";
    isgameover=false;
    win=false;
    game();
});



function game(){
    checkGameOver();
    if(!startgame)
        return;
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
    displaygameover();
    if(!isgameover){
        playerbulletcontroller.draw(ctx);
        enemyController.draw(ctx);
        player.draw(ctx);
        enemybulletcontroller.draw(ctx);
    }
    
}
function displaygameover(){
    if (isgameover) {
        let text = win ? "You saved the Galaxy" : "You failed, Game Over";
        let textOffset = win ? 3.5 : 5;
    
        ctx.fillStyle = win?"golden":"red";
        ctx.textAlign= "center";
        ctx.font = "70px Arial";
        ctx.fillText(text, canvas.width / 2, canvas.height / 2);
        // restartButton.style.display = "block";
      }
}
function checkGameOver(){
    if(isgameover){
        restartButton.style.display = "block";
        
    }

    if(enemybulletcontroller.collideWith(player)){
        isgameover=true;
    }
    if(enemyController.collideWith(player)){
        isgameover=true;
    }
    if(enemyController.enemyRows.length===0){
        win=true;
        isgameover=true;
    }
        
}
setInterval(game,1000/60);