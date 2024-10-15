const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const gameOverScreen = document.getElementById('gameOverScreen');
const restartButton = document.getElementById('restartButton');
const scoreDisplay = document.getElementById('score');
const finalScore = document.getElementById('finalScore');

canvas.width = 400;
canvas.height = 600;

let bird, pipes, score, highScore = 0, isGameOver = false, gravity = 0.6, flapPower = -10, gameLoop;

// Bird object
class Bird {
  constructor() {
    this.x = 50;
    this.y = canvas.height / 2;
    this.width = 30;
    this.height = 30;
    this.velocity = 0;
  }

  draw() {
    ctx.fillStyle = "#ffcc00";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.velocity += gravity;
    this.y += this.velocity;
    if (this.y + this.height > canvas.height || this.y < 0) {
      gameOver();
    }
  }

  flap() {
    this.velocity = flapPower;
  }
}

// Pipe object
class Pipe {
  constructor() {
    this.width = 50;
    this.gap = 120;
    this.x = canvas.width;
    this.top = Math.random() * (canvas.height / 2);
    this.bottom = canvas.height - (this.top + this.gap);
  }

  draw() {
    ctx.fillStyle = "#33cc33";
    ctx.fillRect(this.x, 0, this.width, this.top);
    ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
  }

  update() {
    this.x -= 3;
    if (this.x + this.width < 0) {
      pipes.shift();
      score++;
      if (score > highScore) highScore = score;
      scoreDisplay.textContent = score;
    }
    // Collision detection
    if (bird.x < this.x + this.width && bird.x + bird.width > this.x &&
      (bird.y < this.top || bird.y + bird.height > canvas.height - this.bottom)) {
      gameOver();
    }
  }
}

// Game initialization
function init() {
  bird = new Bird();
  pipes = [];
  score = 0;
  scoreDisplay.textContent = score;
  isGameOver = false;
  gameOverScreen.style.display = 'none';

  // Start the game loop again
  gameLoop = requestAnimationFrame(animate);
}

// Game over
function gameOver() {
  isGameOver = true;
  gameOverScreen.style.display = 'block';
  finalScore.textContent = score;
  cancelAnimationFrame(gameLoop); // Stop the game loop when game over
}

// Restart the game
function restart() {
  init();  // Reset the game state
}

// Create pipes at intervals
function createPipes() {
  if (isGameOver) return;
  pipes.push(new Pipe());
}

// Game loop
function animate() {
  if (isGameOver) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bird.update();
  bird.draw();

  pipes.forEach(pipe => {
    pipe.update();
    pipe.draw();
  });

  gameLoop = requestAnimationFrame(animate); // Continue the game loop
}

// Controls (tap or click)
canvas.addEventListener('click', () => bird.flap());

// Restart button functionality
restartButton.addEventListener('click', restart);

// Pipe creation interval
setInterval(createPipes, 2000);

// Start the game initially
init();
