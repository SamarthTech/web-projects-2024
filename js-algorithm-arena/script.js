// HTML Elements
const codeEditor = document.getElementById('codeEditor');
const runButton = document.getElementById('runButton');
const outputText = document.getElementById('outputText');
const feedback = document.getElementById('feedback');
const challengeTitle = document.getElementById('challengeTitle');
const challengeDescription = document.getElementById('challengeDescription');

// Challenges Array
const challenges = [
    {
        title: "Reverse a String",
        description: "Write a function reverseString(str) that takes a string and returns the string reversed.",
        functionName: "reverseString",
        testCases: [
            { input: "hello", expected: "olleh" },
            { input: "world", expected: "dlrow" },
            { input: "JavaScript", expected: "tpircSavaJ" }
        ]
    },
    {
        title: "Find the Max Number",
        description: "Write a function findMax(arr) that returns the largest number in an array of numbers.",
        functionName: "findMax",
        testCases: [
            { input: [1, 5, 3, 9, 2], expected: 9 },
            { input: [10, 15, 5, 25], expected: 25 },
            { input: [-5, -2, -1, -10], expected: -1 }
        ]
    }
];

let currentChallenge = 0;

// Load Challenge
function loadChallenge() {
    const challenge = challenges[currentChallenge];
    challengeTitle.textContent = `Challenge ${currentChallenge + 1}: ${challenge.title}`;
    challengeDescription.textContent = challenge.description;
}

// Check Player's Solution
function checkSolution(playerFunction) {
    const challenge = challenges[currentChallenge];
    let feedbackMessage = "Results:\n";

    let allTestsPass = true;
    for (const testCase of challenge.testCases) {
        const result = playerFunction(testCase.input);
        const expected = testCase.expected;
        if (result === expected) {
            feedbackMessage += `✓ Test passed for input: ${JSON.stringify(testCase.input)}\n`;
        } else {
            feedbackMessage += `✗ Test failed for input: ${JSON.stringify(testCase.input)}. Expected ${expected} but got ${result}\n`;
            allTestsPass = false;
        }
    }

    if (allTestsPass) {
        feedbackMessage += "\nCongratulations! You've passed all test cases.";
        feedback.style.color = "green";
    } else {
        feedbackMessage += "\nSome test cases didn't pass. Try again!";
        feedback.style.color = "red";
    }

    feedback.textContent = feedbackMessage;
}

// Execute Player's Code
function runCode() {
    const playerCode = codeEditor.value;
    const challenge = challenges[currentChallenge];

    try {
        // eslint-disable-next-line no-new-func
        const playerFunction = new Function('input', `
            ${playerCode}
            return ${challenge.functionName}(input);
        `);

        // Run tests
        checkSolution(playerFunction);
    } catch (error) {
        outputText.textContent = "Error in your code: " + error.message;
        feedback.textContent = "";
        feedback.style.color = "red";
    }
}

// Event Listeners
runButton.addEventListener('click', runCode);

// Initialize the game with the first challenge
loadChallenge();
