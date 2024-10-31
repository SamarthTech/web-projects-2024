// Initial setup
const gridSize = 5;
let score = 0;
let pollution = 0;
let budget = 50;
let population = 0;
let selectedBuilding = '';

const cityGrid = document.getElementById('city-grid');
const scoreDisplay = document.getElementById('score');
const pollutionDisplay = document.getElementById('pollution');
const budgetDisplay = document.getElementById('budget');
const populationDisplay = document.getElementById('population');
const gameOverText = document.getElementById('game-over');

// Set up grid cells
for (let i = 0; i < gridSize * gridSize; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.addEventListener('click', () => placeBuilding(cell));
  cityGrid.appendChild(cell);
}

// Function to add a building type
function addBuilding(type) {
  selectedBuilding = type;
}

// Function to place building on grid cell
function placeBuilding(cell) {
  if (cell.classList.length > 1 || budget <= 0) return;

  cell.classList.add(selectedBuilding);

  switch (selectedBuilding) {
    case 'factory':
      score -= 10;
      pollution += 15;
      budget -= 20;
      cell.innerText = "Factory";
      break;
    case 'park':
      score += 10;
      pollution = Math.max(pollution - 5, 0); // Pollution cannot go below 0
      budget -= 15;
      cell.innerText = "Park";
      break;
    case 'house':
      score += 5;
      population += 10;
      budget -= 10;
      cell.innerText = "House";
      break;
    default:
      break;
  }

  updateStats();
  checkGameOver();
}

// Function to update stats display
function updateStats() {
  scoreDisplay.innerText = score;
  pollutionDisplay.innerText = pollution;
  budgetDisplay.innerText = budget;
  populationDisplay.innerText = population;
}

// Function to check for game over conditions
function checkGameOver() {
  if (budget < 0 || pollution >= 100) {
    gameOverText.style.display = 'block';
    disableGame();
  }
}

// Disable game interactions
function disableGame() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.removeEventListener('click', () => placeBuilding(cell));
  });
}

// Income generation every few seconds
setInterval(() => {
  if (population > 0) {
    budget += population * 2; // Income per person
    pollution += Math.floor(population / 20); // Pollution from population
    updateStats();
    checkGameOver();
  }
}, 5000); // Every 5 seconds
