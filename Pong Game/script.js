const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");
const reset=document.getElementById("rst");

// Paddle settings
const paddleWidth = 10;
const paddleHeight = 100;
const playerSpeed = 6;

// Ball settings
const ballSize = 10;
let ballSpeedX = 5;
let ballSpeedY = 3;

// Game elements
const player = {
    x: 0,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    score: 0
};

const computer = {
    x: canvas.width - paddleWidth,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    score: 0
};

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: ballSize
};

// Control settings
let upPressed = false;
let downPressed = false;

// Event listeners
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(event) {
    if (event.key === "ArrowUp") {
        upPressed = true;
    } else if (event.key === "ArrowDown") {
        downPressed = true;
    }
}

function keyUpHandler(event) {
    if (event.key === "ArrowUp") {
        upPressed = false;
    } else if (event.key === "ArrowDown") {
        downPressed = false;
    }
}

// Update game elements
function update() {
    if (upPressed && player.y > 0) {
        player.y -= playerSpeed;
    }
    if (downPressed && player.y < canvas.height - paddleHeight) {
        player.y += playerSpeed;
    }

    // Simple AI for the computer paddle
    if (ball.y < computer.y) {
        computer.y -= playerSpeed;
    } else if (ball.y > computer.y + paddleHeight) {
        computer.y += playerSpeed;
    }

    // Ball movement
    ball.x += ballSpeedX;
    ball.y += ballSpeedY;

    // Ball collision with top and bottom
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ballSpeedY = -ballSpeedY;
    }

    // Ball collision with paddles
    if (
        ball.x - ball.radius < player.x + player.width &&
        ball.y > player.y &&
        ball.y < player.y + player.height
    ) {
        ballSpeedX = -ballSpeedX;
    } else if (
        ball.x + ball.radius > computer.x &&
        ball.y > computer.y &&
        ball.y < computer.y + computer.height
    ) {
        ballSpeedX = -ballSpeedX;
    }

    // Scoring
    if (ball.x + ball.radius < 0) {
        computer.score++;
        resetBall();
    } else if (ball.x - ball.radius > canvas.width) {
        player.score++;
        resetBall();
    }
}

// Reset ball position
function resetBall() {
   ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ballSpeedX = -ballSpeedX; // Change direction
}

// Draw everything
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw paddles
    ctx.fillStyle = "white";
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.fillRect(computer.x, computer.y, computer.width, computer.height);

    // Draw ball
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();

    // Draw scores
    ctx.font = "16px Arial";
    ctx.fillText(`Player: ${player.score}`, 50, 20);
    ctx.fillText(`Computer: ${computer.score}`, canvas.width - 150, 20);
}


// Game loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}
function resetGame(){
    resetBall();
    player.score=0;
    computer.score=0;
}

gameLoop();
