const cssEditor = document.getElementById('cssEditor');
const submitButton = document.getElementById('submitButton');
const previewFrame = document.getElementById('previewFrame');
const feedback = document.getElementById('feedback');

// Level data for level 1 (Simple Move)
const levels = [
    {
        title: 'Simple Move',
        description: 'Create an animation where the square moves from left to right using the @keyframes and transform properties.',
        targetHTML: `<div id="targetBoxes" class="animation-box"></div>`,
        targetCSS: `
            .animation-box {
                width: 100px;
                height: 100px;
                background-color: #3498db;
                animation: moveRight 2s infinite alternate;
            }
            @keyframes moveRight {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(200px);
                }
            }
        `
    }
];

// Current level
let currentLevel = 0;

// Load the target animation for the current level
function loadLevel() {
    const level = levels[currentLevel];
    document.getElementById('levelTitle').textContent = `Level ${currentLevel + 1}: ${level.title}`;
    document.getElementById('levelDescription').textContent = level.description;
    document.getElementById('target').innerHTML = level.targetHTML;
    const style = document.createElement('style');
    style.textContent = level.targetCSS;
    document.getElementById('target').appendChild(style);
}

// Function to update the player's animation in the preview iframe
function updatePreview() {
    const playerCSS = cssEditor.value;

    const previewDocument = previewFrame.contentDocument;
    previewDocument.open();
    previewDocument.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <style>${playerCSS}</style>
        </head>
        <body>
            <div class="animation-box"></div>
        </body>
        </html>
    `);
    previewDocument.close();
}

// Function to check if the player's animation matches the target
function checkAnimation() {
    const level = levels[currentLevel];
    const targetCSS = level.targetCSS.trim();
    const playerCSS = cssEditor.value.trim();

    if (targetCSS === playerCSS) {
        feedback.textContent = 'Perfect! Your animation matches the target exactly.';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Not quite! Keep adjusting your CSS.';
        feedback.style.color = 'red';
    }
}

// Event listener for the submit button
submitButton.addEventListener('click', function() {
    updatePreview();
    checkAnimation();
});

// Initialize the game by loading the first level
loadLevel();
