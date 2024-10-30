// Grab elements
const cssEditor = document.getElementById('cssEditor');
const applyButton = document.getElementById('applyButton');
const playerImage = document.getElementById('playerImage');
const feedback = document.getElementById('feedback');

// Target filters for each level
const levels = [
    {
        targetFilter: 'blur(5px) grayscale(50%) contrast(150%)',
        description: 'Apply a blur of 5px, grayscale at 50%, and contrast of 150%.',
    },
    {
        targetFilter: 'sepia(60%) brightness(1.2) contrast(110%)',
        description: 'Apply sepia at 60%, brightness at 1.2, and contrast at 110%.',
    }
];

let currentLevel = 0;

// Load target filter and level description
function loadLevel() {
    feedback.textContent = `Level ${currentLevel + 1}: ${levels[currentLevel].description}`;
}

// Apply the player's filter
function applyFilter() {
    // Set player's filter from textarea
    const playerFilter = cssEditor.value.trim();
    playerImage.style.filter = playerFilter;

    // Check if the player's filter matches the target
    if (playerFilter === levels[currentLevel].targetFilter) {
        feedback.textContent = 'Great job! You matched the target filter!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Not quite there! Keep trying.';
        feedback.style.color = 'red';
    }
}

// Add event listener to the apply button
applyButton.addEventListener('click', applyFilter);

// Initialize the first level
loadLevel();
