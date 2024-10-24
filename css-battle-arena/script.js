const htmlEditor = document.getElementById('htmlEditor');
const cssEditor = document.getElementById('cssEditor');
const submitButton = document.getElementById('submitButton');
const previewFrame = document.getElementById('previewFrame');
const feedback = document.getElementById('feedback');

// Target design and player’s expected design structure for level 1
const levels = [
    {
        title: 'Centered Square',
        description: 'Replicate the design of a blue square, centered within the container.',
        targetHTML: '<div id="targetSquare"></div>',
        targetCSS: `
            #targetSquare {
                width: 100px;
                height: 100px;
                background-color: #3498db;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        `
    }
];

// Current level
let currentLevel = 0;

// Load the target design for the current level
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
    const playerHTML = htmlEditor.value;
    const playerCSS = cssEditor.value;

    const previewDocument = previewFrame.contentDocument;
    previewDocument.open();
    previewDocument.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <style>${playerCSS}</style>
        </head>
        <body>${playerHTML}</body>
        </html>
    `);
    previewDocument.close();
}

// Function to check how close the player's design matches the target
function checkDesign() {
    const level = levels[currentLevel];
    const targetHTML = level.targetHTML.trim();
    const targetCSS = level.targetCSS.trim();
    const playerHTML = htmlEditor.value.trim();
    const playerCSS = cssEditor.value.trim();

    if (targetHTML === playerHTML && targetCSS === playerCSS) {
        feedback.textContent = 'Perfect! Your design matches the target exactly.';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Not quite! Keep adjusting your HTML and CSS.';
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
