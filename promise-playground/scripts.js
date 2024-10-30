const codeEditor = document.getElementById("codeEditor");
const runButton = document.getElementById("runButton");
const output = document.getElementById("output");
const taskDescription = document.getElementById("taskDescription");

// Levels and descriptions
const levels = [
    {
        description: "Task 1: Create a promise that resolves with 'Success!' after a 1-second delay.",
        testFunc: async function () {
            const promiseFunction = new Function(codeEditor.value + "; return createPromise;");
            const createPromise = promiseFunction();
            const result = await createPromise();
            return result === "Success!" ? "Correct!" : "Incorrect! Try again.";
        }
    },
    {
        description: "Task 2: Write an async function that waits for a promise to resolve with 'Done!' after a random delay (up to 3 seconds).",
        testFunc: async function () {
            const asyncFunction = new Function(codeEditor.value + "; return waitRandom;");
            const waitRandom = asyncFunction();
            const result = await waitRandom();
            return result === "Done!" ? "Correct!" : "Incorrect! Try again.";
        }
    },
    {
        description: "Task 3: Create a function that fetches data (use setTimeout to simulate) and returns a rejected promise if an error occurs.",
        testFunc: async function () {
            const fetchFunction = new Function(codeEditor.value + "; return fetchData;");
            const fetchData = fetchFunction();
            try {
                await fetchData(false); // Simulating no error
                return "Correct!";
            } catch {
                return "Incorrect! Try again.";
            }
        }
    }
];

let currentLevel = 0;

function loadLevel() {
    taskDescription.textContent = levels[currentLevel].description;
    codeEditor.value = ""; // Clear editor for each level
    output.textContent = "";
}

async function runCode() {
    output.textContent = "Running...";
    try {
        const result = await levels[currentLevel].testFunc();
        output.textContent = result;

        if (result === "Correct!") {
            currentLevel++;
            if (currentLevel < levels.length) {
                loadLevel();
            } else {
                output.textContent = "Congratulations! You've completed all levels!";
            }
        }
    } catch (error) {
        output.textContent = `Error: ${error.message}`;
    }
}

runButton.addEventListener("click", runCode);

// Load the first level
loadLevel();
