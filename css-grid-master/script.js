const cssEditor = document.getElementById('cssEditor');
const submitButton = document.getElementById('submitButton');
const previewFrame = document.getElementById('previewFrame');
const feedback = document.getElementById('feedback');

// Level data for level 1 (Simple Grid)
const levels = [
    {
        title: 'Simple Grid',
        description: 'Create a 2x2 grid with two rows and two columns. Each box should have a background color.',
        targetHTML: `
            <div class="grid">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
        `,
        targetCSS: `
            .grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 10px;
                padding: 10px;
            }
            .grid div {
                background-color: #3498db;
                height: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                font-weight: bold;
            }
        `
    }
];

// Current level
let currentLevel = 0;

// Load the target grid for the current level
function loadLevel() {
    const level = levels[currentLevel];
    document.getElementById('levelTitle').textContent = `Level ${currentLevel + 1}: ${level.title}`;
    document.getElementById('levelDescription').textContent = level.description;
    document.getElementById('targetGrid').innerHTML = level.targetHTML;
    const style = document.createElement('style');
    style.textContent = level.targetCSS;
    document.getElementById('targetGrid').appendChild(style);
}

// Function to update the player's grid in the preview iframe
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
            <div class="grid">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
        </body>
        </html>
    `);
    previewDocument.close();
}

// Function to check if the player's grid matches the target
function checkGrid() {
    const level = levels[currentLevel];
    const targetCSS = level.targetCSS.trim();
    const playerCSS = cssEditor.value.trim();

    if (targetCSS === playerCSS) {
        feedback.textContent = 'Perfect! Your grid matches the target exactly.';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Not quite! Keep adjusting your CSS.';
        feedback.style.color = 'red';
    }
}

// Event listener for the submit button
submitButton.addEventListener('click', function() {
    updatePreview();
    checkGrid();
});

// Initialize the game by loading the first level
loadLevel();
