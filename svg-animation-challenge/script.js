const cssEditor = document.getElementById('cssEditor');
const submitButton = document.getElementById('submitButton');
const previewFrame = document.getElementById('previewFrame');
const feedback = document.getElementById('feedback');

// Level data for level 1
const levels = [
    {
        title: 'Rotate the Star',
        description: 'Animate the SVG star to rotate 360 degrees using CSS animations.',
        targetHTML: `<svg width="100" height="100" viewBox="0 0 100 100"><polygon points="50,15 61,70 98,35 2,35 39,70" class="star"></polygon></svg>`,
        targetCSS: `
            .star {
                fill: #f39c12;
                animation: rotateStar 2s infinite linear;
            }
            @keyframes rotateStar {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `
    }
];

// Current level
let currentLevel = 0;

// Load the target SVG and animation for the current level
function loadLevel() {
    const level = levels[currentLevel];
    document.getElementById('levelTitle').textContent = `Level ${currentLevel + 1}: ${level.title}`;
    document.getElementById('levelDescription').textContent = level.description;
    document.getElementById('targetSVG').innerHTML = level.targetHTML;
    const style = document.createElement('style');
    style.textContent = level.targetCSS;
    document.getElementById('targetSVG').appendChild(style);
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
            <svg width="100" height="100" viewBox="0 0 100 100">
                <polygon points="50,15 61,70 98,35 2,35 39,70" class="star"></polygon>
            </svg>
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
