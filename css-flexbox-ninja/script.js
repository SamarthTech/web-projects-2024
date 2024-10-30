const cssEditor = document.getElementById('cssEditor');
const submitButton = document.getElementById('submitButton');
const previewFrame = document.getElementById('previewFrame');
const feedback = document.getElementById('feedback');

// Level data for Level 1 (Center the Box)
const levels = [
    {
        title: 'Center the Box',
        description: 'Use Flexbox to center the blue box inside the container.',
        targetHTML: `<div class="layout-box"><div class="box">Box</div></div>`,
        targetCSS: `
            .layout-box {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `
    }
];

// Current level index
let currentLevel = 0;

// Load the current level's target layout
function loadLevel() {
    const level = levels[currentLevel];
    document.getElementById('levelTitle').textContent = `Level ${currentLevel + 1}: ${level.title}`;
    document.getElementById('levelDescription').textContent = level.description;
    document.getElementById('target').innerHTML = level.targetHTML;

    // Apply target CSS for demonstration
    const targetStyle = document.createElement('style');
    targetStyle.textContent = level.targetCSS;
    document.getElementById('target').appendChild(targetStyle);
}

// Function to update the player's layout in the preview iframe
function updatePreview() {
    const playerCSS = cssEditor.value;

    const previewDocument = previewFrame.contentDocument;
    previewDocument.open();
    previewDocument.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <style>
                body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f4f4f4; }
                .layout-box { display: flex; width: 100%; height: 200px; background-color: #ecf0f1; border: 2px dashed #3498db; }
                .box { width: 50px; height: 50px; background-color: #3498db; color: white; display: flex; justify-content: center; align-items: center; }
                ${playerCSS}
            </style>
        </head>
        <body>
            <div class="layout-box"><div class="box">Box</div></div>
        </body>
        </html>
    `);
    previewDocument.close();
}

// Check if the player's layout matches the target layout
function checkLayout() {
    const level = levels[currentLevel];
    const targetCSS = level.targetCSS.trim();
    const playerCSS = cssEditor.value.trim();

    if (targetCSS === playerCSS) {
        feedback.textContent = 'Great job! Your layout matches the target!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Not quite there! Adjust your Flexbox settings and try again.';
        feedback.style.color = 'red';
    }
}

// Event listener for the submit button
submitButton.addEventListener('click', function() {
    updatePreview();
    checkLayout();
});

// Initialize the game by loading the first level
loadLevel();
