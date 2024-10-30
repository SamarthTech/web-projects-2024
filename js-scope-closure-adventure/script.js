const jsEditor = document.getElementById('jsEditor');
const runButton = document.getElementById('runButton');
const outputText = document.getElementById('outputText');
const feedback = document.getElementById('feedback');

// Levels focusing on scope and closure
const levels = [
    {
        title: 'Block Scope',
        description: 'Fix the code to ensure "x" inside the function does not affect "x" outside the function. Use block scope correctly.',
        initialCode: `let x = 10;\nfunction testScope() {\n  x = 5;\n}\ntestScope();\nconsole.log(x); // should output 10`,
        solution: 'let x = 10;\nfunction testScope() {\n  let x = 5;\n}\ntestScope();\nconsole.log(x);',
        checkOutput: '10'
    },
    {
        title: 'Closure Capture',
        description: 'Complete the code so the function returned by "makeCounter" keeps track of its own count each time it\'s called.',
        initialCode: `function makeCounter() {\n  let count = 0;\n  // add code here\n}\n\nconst counter = makeCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2`,
        solution: `function makeCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\n\nconst counter = makeCounter();\nconsole.log(counter());\nconsole.log(counter());`,
        checkOutput: '1\n2'
    }
];

let currentLevel = 0;

// Load the current level's data
function loadLevel() {
    const level = levels[currentLevel];
    document.getElementById('levelTitle').textContent = `Level ${currentLevel + 1}: ${level.title}`;
    document.getElementById('levelDescription').textContent = level.description;
    jsEditor.value = level.initialCode;
    feedback.textContent = '';
    outputText.textContent = '';
}

// Run player's code and check if the solution matches the expected output
function runCode() {
    const level = levels[currentLevel];
    const playerCode = jsEditor.value;
    let playerOutput;

    try {
        // Create a function to safely execute player code and capture output
        const wrappedFunction = new Function(`
            let consoleOutput = '';
            const console = {
                log: (msg) => consoleOutput += msg + '\\n'
            };
            ${playerCode}
            return consoleOutput.trim();
        `);

        // Run the player’s code and capture the output
        playerOutput = wrappedFunction();
        outputText.textContent = playerOutput;
    } catch (error) {
        outputText.textContent = `Error: ${error.message}`;
        feedback.textContent = 'There is an error in your code.';
        feedback.style.color = 'red';
        return;
    }

    // Check if the output matches the expected solution
    if (playerOutput === level.checkOutput) {
        feedback.textContent = 'Well done! Your code is correct!';
        feedback.style.color = 'green';
        currentLevel = (currentLevel + 1) % levels.length;
        setTimeout(loadLevel, 1500); // Load next level after 1.5 seconds
    } else {
        feedback.textContent = 'Not quite. Review your code and try again.';
        feedback.style.color = 'red';
    }
}

// Event listener for running code
runButton.addEventListener('click', runCode);

// Initialize the game by loading the first level
loadLevel();
