const cssEditor = document.getElementById('cssEditor');
const submitButton = document.getElementById('submitButton');
const previewFrame = document.getElementById('previewFrame');
const feedback = document.getElementById('feedback');

// Target layout structure for level 1 (Flexbox Centering)
const levels = [
    {
        title: 'Flexbox Centering',
        description: 'Replicate the layout using Flexbox properties to center the boxes both vertically and horizontally.',
        targetHTML: `
            <div id="targetBoxes">
                <div></div>
                <div></div>
                <div></div>
            </div>
        `,
        targetCSS: `
            #targetBoxes {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
            }

            #targetBoxes div {
                width: 50px;
                height: 50px;
                background-color: #3498db;
                margin: 10px;
            }
        `
    }
];

// Current level
let currentLevel = 0;

// Load the target layout for the current level
function loadLevel() {
    const level = levels[currentLevel];
    document.getElementById('levelTitle').textContent = `Level ${currentLevel + 1}: ${level.title}`;
    document.getElementById('levelDescription').textContent = level.description;
    document.getElementById('target').innerHTML = level.targetHTML;
    const style = document.createElement('style');
    style.textContent = level.targetCSS;
    document.getElementById('target').appendChild(style);
}

// Function to update the player's design in the preview iframe
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
            <div id="targetBoxes">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </body>
        </html>
    `);
    previewDocument.close();
}

// Function to check how close the player's design matches the target
function checkDesign() {
    const level = levels[currentLevel];
    const targetCSS = level.targetCSS.trim();
    const playerCSS = cssEditor.value.trim();

    if (targetCSS === playerCSS) {
        feedback.textContent = 'Perfect! Your design matches the target exactly.';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Not quite! Keep adjusting your CSS.';
        feedback.style.color = 'red';
    }
}

// Event listener for the submit button
submitButton.addEventListener('click', function() {
    updatePreview();
    checkDesign();
});

// Initialize the game by loading the first level
loadLevel();
