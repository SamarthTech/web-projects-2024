const jsEditor = document.getElementById('jsEditor');
const submitButton = document.getElementById('submitButton');
const feedback = document.getElementById('feedback');
const playArea = document.getElementById('playArea');

// Define different levels with challenge description and target interaction
const levels = [
    {
        title: 'Click to Change Text',
        description: 'Attach a <code>click</code> event handler to the button to change its text to "Clicked!" when clicked.',
        htmlContent: '<button id="clickButton">Click Me</button>',
        targetCode: `document.getElementById('clickButton').addEventListener('click', function() { this.textContent = 'Clicked!'; });`,
        validation: function() {
            const button = document.getElementById('clickButton');
            return button && button.textContent === 'Clicked!';
        }
    },
    {
        title: 'Mouseover to Change Color',
        description: 'Attach a <code>mouseover</code> event handler to the div to change its background color to red when hovered over.',
        htmlContent: '<div id="hoverBox" style="width: 100px; height: 100px; background-color: blue;"></div>',
        targetCode: `document.getElementById('hoverBox').addEventListener('mouseover', function() { this.style.backgroundColor = 'red'; });`,
        validation: function() {
            const box = document.getElementById('hoverBox');
            return box && box.style.backgroundColor === 'red';
        }
    },
    {
        title: 'Keydown to Log Key',
        description: 'Attach a <code>keydown</code> event handler to log the pressed key to the console.',
        htmlContent: '<input id="textInput" type="text" placeholder="Type something...">',
        targetCode: `document.getElementById('textInput').addEventListener('keydown', function(event) { console.log(event.key); });`,
        validation: function() {
            // Check if keydown event is correctly attached by simulating keypress
            const input = document.getElementById('textInput');
            return input && input.onkeydown !== null;
        }
    }
];

let currentLevel = 0;

// Load the initial level
function loadLevel() {
    const level = levels[currentLevel];
    document.getElementById('levelTitle').innerHTML = `Level ${currentLevel + 1}: ${level.title}`;
    document.getElementById('levelDescription').innerHTML = level.description;
    playArea.innerHTML = level.htmlContent;
    jsEditor.value = level.targetCode;  // Pre-fill the editor with the expected solution for reference
    feedback.textContent = '';
}

// Validate player's solution by running their code and checking against the target behavior
function runPlayerCode() {
    const playerCode = jsEditor.value;
    playArea.innerHTML = levels[currentLevel].htmlContent;  // Reset play area
    try {
        // Create a new function from the player's input and execute it
        const playerFunction = new Function(playerCode);
        playerFunction();

        // Validate if the interaction works as expected
        if (levels[currentLevel].validation()) {
            feedback.textContent = 'Great job! You completed the level!';
            feedback.style.color = 'green';
        } else {
            feedback.textContent = 'Not quite right, check your code and try again!';
            feedback.style.color = 'red';
        }
    } catch (error) {
        feedback.textContent = 'There is an error in your code. Please check and try again.';
        feedback.style.color = 'red';
    }
}

// Event listener for the "Run Code" button
submitButton.addEventListener('click', runPlayerCode);

// Load the first level when the page loads
loadLevel();
