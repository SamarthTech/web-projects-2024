import { levels } from "./levels.js";

// DOM elements
const levelDescription = document.getElementById("level-description");
const objectExample = document.getElementById("object-example");
const typescriptEditor = document.getElementById("typescriptEditor");
const checkButton = document.getElementById("checkButton");
const feedback = document.getElementById("feedback");

// Game variables
let currentLevel = 0;

// Load level data
function loadLevel() {
    const level = levels[currentLevel];
    levelDescription.textContent = `Level ${currentLevel + 1}: ${level.description}`;
    objectExample.textContent = JSON.stringify(level.example, null, 2);
    typescriptEditor.value = "";
    feedback.textContent = "";
}

// Check if player's interface matches the level's expected interface
function checkSolution() {
    const playerInterface = typescriptEditor.value.trim();
    const level = levels[currentLevel];
    const expectedInterface = level.interface.trim();

    if (playerInterface === expectedInterface) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";

        // Proceed to the next level after a brief delay
        setTimeout(() => {
            currentLevel++;
            if (currentLevel < levels.length) {
                loadLevel();
            } else {
                feedback.textContent = "Congratulations! You've completed all levels!";
            }
        }, 1500);
    } else {
        feedback.textContent = "Not quite right. Check your syntax and try again.";
        feedback.style.color = "red";
    }
}

// Event listener for the check button
checkButton.addEventListener("click", checkSolution);

// Initialize the first level
loadLevel();
