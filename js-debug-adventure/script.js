const codeEditor = document.getElementById('codeEditor');
const submitButton = document.getElementById('submitButton');
const outputArea = document.getElementById('output');
const feedback = document.getElementById('feedback');

// List of levels with buggy code, expected output, and description
const levels = [
    {
        title: 'Fix the Calculator',
        description: 'There is a bug in the calculator function. Your task is to fix the bug so that the function returns the correct result when adding two numbers.',
        buggyCode: `
function addNumbers(a, b) {
    return a - b;  // This is wrong, it should add
}
console.log(addNumbers(3, 5));  // Expected output: 8
        `,
        expectedOutput: '8'
    },
    {
        title: 'Fix the Greeting Function',
        description: 'The function should greet the user by name. However, there is a bug in the greeting message. Fix it.',
        buggyCode: `
function greet(name) {
    return 'Hello' + name;  // Missing space
}
console.log(greet('Alice'));  // Expected output: "Hello Alice"
        `,
        expectedOutput: 'Hello Alice'
    }
];

// Current level
let currentLevel = 0;

// Load the current level
function loadLevel() {
    const level = levels[currentLevel];
    document.getElementById('levelTitle').textContent = `Level ${currentLevel + 1}: ${level.title}`;
    document.getElementById('levelDescription').textContent = level.description;
    document.getElementById('buggyCode').textContent = level.buggyCode;
    outputArea.textContent = '';
    feedback.textContent = '';
    codeEditor.value = level.buggyCode.trim();
}

// Function to run player's code and check output
function runCode() {
    const playerCode = codeEditor.value;

    try {
        // Capture the output of the player's code
        const originalConsoleLog = console.log;
        let consoleOutput = '';
        console.log = function (message) {
            consoleOutput += message;
        };

        // Run player's code
        eval(playerCode);

        // Restore original console.log
        console.log = originalConsoleLog;

        // Check if player's output matches expected output
        const level = levels[currentLevel];
        if (consoleOutput.trim() === level.expectedOutput) {
            feedback.textContent = 'Correct! You fixed the bug!';
            feedback.style.color = 'green';
            currentLevel++;

            if (currentLevel < levels.length) {
                loadLevel();
            } else {
                feedback.textContent = 'Congratulations! You have completed all levels.';
                feedback.style.color = 'blue';
            }
        } else {
            feedback.textContent = `Incorrect! Expected output: ${level.expectedOutput}`;
            feedback.style.color = 'red';
        }

        outputArea.textContent = consoleOutput;

    } catch (error) {
        feedback.textContent = `Error: ${error.message}`;
        feedback.style.color = 'red';
    }
}

// Event listener for the submit button
submitButton.addEventListener('click', runCode);

// Initialize the game by loading the first level
loadLevel();
