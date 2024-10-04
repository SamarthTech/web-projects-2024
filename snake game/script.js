const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highscoreElement = document.querySelector(".high-score");

let foodX, foodY;
let gameOver = false;
let snakeX = 5, snakeY = 10;
let velocityX = 0, velocityY = 0; // Initialize velocities
let snakeBody = []; // Array to keep track of snake's body
let setIntervalId;
let score = 0;
let highScore = localStorage.getItem("high-score") || 0;
highscoreElement.innerText = `High Score: ${highScore}`;

// Function to set a random position for the food
const foodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

// Function to handle game over
const handleGameOver = () => {
    clearInterval(setIntervalId);
    alert("Game Over! Press OK to replay...");
    location.reload();
}

// Function to change the snake's direction based on arrow keys
const changeDirection = (e) => {
    if (e.key === "ArrowUp" && velocityY !== 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown" && velocityY !== -1) {
        velocityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowRight" && velocityX !== -1) {
        velocityX = 1;
        velocityY = 0;
    } else if (e.key === "ArrowLeft" && velocityX !== 1) {
        velocityX = -1;
        velocityY = 0;
    }
}

// Main game function
const initGame = () => {
    if (gameOver) return handleGameOver();
    
    // Check if snake ate the food
    if (snakeX === foodX && snakeY === foodY) {
        foodPosition(); // Generate new food position
        snakeBody.push([foodX, foodY]); // Grow the snake
        score++;
        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score", highScore);
        scoreElement.innerText = `Score: ${score}`;
        highscoreElement.innerText = `High Score: ${highScore}`;
    }

    // Update the snake's body positions
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    snakeBody[0] = [snakeX, snakeY];

    // Update snake position
    snakeX += velocityX;
    snakeY += velocityY;

    // Check if snake hits the wall
    if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        gameOver = true;
    }

    // Display food and snake
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    htmlMarkup += `<div class="head" style="grid-area: ${snakeY} / ${snakeX}"></div>`;
    for (let i = 0; i < snakeBody.length; i++) {
        htmlMarkup += `<div class="body" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        
        // Check if snake hits itself
        if (i != 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
            gameOver = true;
        }
    }
    playBoard.innerHTML = htmlMarkup;
}

// Initialize food position and start game loop
foodPosition();
setIntervalId = setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);
