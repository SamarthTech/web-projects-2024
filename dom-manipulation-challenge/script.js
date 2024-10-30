const levelTitle = document.getElementById('levelTitle');
const levelDescription = document.getElementById('levelDescription');
const codeEditor = document.getElementById('codeEditor');
const runButton = document.getElementById('runButton');
const checkButton = document.getElementById('checkButton');
const feedback = document.getElementById('feedback');
const itemList = document.getElementById('itemList');

// Level data for the first level
const levels = [
    {
        title: 'Level 1',
        description: 'Your task is to add a new list item "Learn JavaScript" to the list below.',
        expectedOutput: ['Learn HTML', 'Learn CSS', 'Learn JavaScript']
    },
    // You can add more levels here
];

// Current level index
let currentLevel = 0;

// Load the level information
function loadLevel() {
    const level = levels[currentLevel];
    levelTitle.textContent = `Level ${currentLevel + 1}: ${level.title}`;
    levelDescription.textContent = level.description;
}

// Run the player’s code in a safe context
function runPlayerCode() {
    const playerCode = codeEditor.value;

    // Clear the previous feedback
    feedback.textContent = '';

    try {
        // Evaluate the player's code
        eval(playerCode);
    } catch (error) {
        feedback.textContent = `Error: ${error.message}`;
        feedback.style.color = 'red';
    }
}

// Check the player’s solution against the expected output
function checkSolution() {
    const level = levels[currentLevel];
    const listItems = Array.from(itemList.children).map(item => item.textContent);

    if (JSON.stringify(listItems) === JSON.stringify(level.expectedOutput)) {
        feedback.textContent = 'Correct! You successfully added the item.';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Not quite! Try again.';
        feedback.style.color = 'red';
    }
}

// Event listeners for buttons
runButton.addEventListener('click', runPlayerCode);
checkButton.addEventListener('click', checkSolution);

// Initialize the game by loading the first level
loadLevel();
