const cssSelectorInput = document.getElementById('cssSelector');
const submitButton = document.getElementById('submitButton');
const feedback = document.getElementById('feedback');

// Level data for the game
const levels = [
    {
        description: 'Select all the paragraphs and make them red.',
        targetSelector: 'p',
        targetStyles: {
            color: 'red'
        }
    },
    {
        description: 'Select the first paragraph and make it blue.',
        targetSelector: 'p:first-of-type',
        targetStyles: {
            color: 'blue'
        }
    },
    {
        description: 'Select all div elements and give them a green background.',
        targetSelector: 'div',
        targetStyles: {
            backgroundColor: 'green'
        }
    },
    {
        description: 'Select the last paragraph and underline it.',
        targetSelector: 'p:last-of-type',
        targetStyles: {
            textDecoration: 'underline'
        }
    },
    {
        description: 'Select the div with class "hidden-box" and change its color to orange.',
        targetSelector: '.hidden-box',
        targetStyles: {
            color: 'orange'
        }
    }
];

let currentLevel = 0;

// Function to apply styles based on the player's selector
function applyStyles(selector) {
    const exampleDiv = document.getElementById('example');
    const elements = exampleDiv.querySelectorAll(selector);

    elements.forEach((element) => {
        for (const [property, value] of Object.entries(levels[currentLevel].targetStyles)) {
            element.style[property] = value;
        }
    });
}

// Function to check the player's input against the target selector
function checkSelector() {
    const playerSelector = cssSelectorInput.value.trim();
    const targetSelector = levels[currentLevel].targetSelector;

    if (playerSelector === targetSelector) {
        feedback.textContent = 'Correct! Your selector works!';
        feedback.style.color = 'green';
        applyStyles(playerSelector);
        currentLevel++;
        if (currentLevel < levels.length) {
            loadLevel();
        } else {
            feedback.textContent = 'Congratulations! You have completed all levels!';
            submitButton.disabled = true;
        }
    } else {
        feedback.textContent = 'Try again! Your selector is incorrect.';
        feedback.style.color = 'red';
    }
}

// Function to load the next level
function loadLevel() {
    const level = levels[currentLevel];
    document.getElementById('levelDescription').textContent = level.description;
    cssSelectorInput.value = '';
    feedback.textContent = '';
}

// Event listener for the submit button
submitButton.addEventListener('click', checkSelector);

// Initialize the game by loading the first level
loadLevel();
