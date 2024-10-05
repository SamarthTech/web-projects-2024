let score = 0;
let totalBalloonsPopped = 0;
let isGameActive = false;
const maxBalloons = 100;  // Game ends after 100 balloons
const balloonLimit = 5;  // Number of balloons on the screen at any time

function startGame() {
    if (!isGameActive) {
        isGameActive = true;
        score = 0;
        totalBalloonsPopped = 0;
        document.getElementById('score').textContent = "Score: 0";
        document.getElementById('balloon-container').innerHTML = '';
        spawnBalloons();
        document.getElementById('start-btn').textContent = "Stop Game";
    } else {
        endGame();
    }
}

function spawnBalloons() {
    const balloonContainer = document.getElementById('balloon-container');

    const createBalloon = setInterval(() => {
        if (!isGameActive || totalBalloonsPopped >= maxBalloons) {
            clearInterval(createBalloon);
            endGame();
            return;
        }
        
        const balloonCount = document.querySelectorAll('.balloon').length;
        if (balloonCount < balloonLimit) {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.style.backgroundColor = getRandomColor();
            balloon.style.left = Math.random() * 90 + '%';
            balloon.style.animationDuration = Math.random() * 3 + 4 + 's';  // Varying balloon speeds
            balloon.addEventListener('click', popBalloon);
            balloonContainer.appendChild(balloon);
        }
    }, 500);  // Spawning a new balloon every 0.5 seconds
}

function popBalloon(event) {
    if (isGameActive) {
        event.target.remove();  // Remove balloon from the game area
        score++;
        totalBalloonsPopped++;
        document.getElementById('score').textContent = `Score: ${score}`;

        if (totalBalloonsPopped >= maxBalloons) {
            endGame();
        }
    }
}

function getRandomColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FFFF33', '#FF33FF'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function endGame() {
    isGameActive = false;
    alert(`Game Over! Your final score is ${score}.`);
    document.getElementById('start-btn').textContent = "Start Game";
    document.getElementById('balloon-container').innerHTML = '';  // Clear balloons
}
