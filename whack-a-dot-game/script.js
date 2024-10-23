let score = 0;
let level = 1;
let timeLeft = 30;
let gameTimer;
let moleTimer;
let activeHole;
let combo = 0;

const scoreDisplay = document.getElementById('score');
const levelDisplay = document.getElementById('level');
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startBtn');
const holes = document.querySelectorAll('.hole');

// Mole types with different values
const moleTypes = {
    normal: { points: 1, speed: 1000 },
    special: { points: 5, speed: 500 }
};

function startGame() {
    resetGame();
    startButton.disabled = true;
    gameTimer = setInterval(updateTimer, 1000);
    moleTimer = setInterval(showMole, 1000 - level * 100); // Faster moles per level
}

function resetGame() {
    score = 0;
    level = 1;
    timeLeft = 30;
    combo = 0;
    updateDisplays();
}

function updateTimer() {
    timeLeft--;
    timerDisplay.innerText = `Time: ${timeLeft}s`;
    if (timeLeft <= 0) {
        clearInterval(gameTimer);
        clearInterval(moleTimer);
        endGame();
    }
}

function updateDisplays() {
    scoreDisplay.innerText = `Score: ${score}`;
    levelDisplay.innerText = `Level: ${level}`;
}

function showMole() {
    if (activeHole) activeHole.innerHTML = ''; // Clear previous mole

    const randomHole = holes[Math.floor(Math.random() * holes.length)];
    const moleType = Math.random() > 0.8 ? 'special' : 'normal'; // 20% chance for special mole

    const mole = document.createElement('div');
    mole.classList.add('mole');
    if (moleType === 'special') mole.classList.add('special-mole');
    mole.dataset.points = moleTypes[moleType].points;

    mole.addEventListener('click', hitMole);
    randomHole.appendChild(mole);
    activeHole = randomHole;
}

function hitMole(e) {
    const mole = e.target;
    const points = parseInt(mole.dataset.points);

    score += points;
    combo++;
    if (combo % 5 === 0) score += 5; // Combo bonus for 5 hits in a row
    updateDisplays();

    // Remove mole and prepare for next one
    mole.removeEventListener('click', hitMole);
    activeHole.innerHTML = '';
    
    // Increase level every 10 points
    if (score >= level * 10) {
        level++;
        updateDisplays();
        clearInterval(moleTimer);
        moleTimer = setInterval(showMole, 1000 - level * 100);
    }
}

function endGame() {
    alert(`Game Over! Your final score is ${score}.`);
    startButton.disabled = false;
    clearInterval(moleTimer);
}

// Start the game when the button is clicked
startButton.addEventListener('click', startGame);
