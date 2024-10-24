const cssEditor = document.getElementById('cssEditor');
const designPreview = document.getElementById('designPreview');
const submitButton = document.getElementById('submitButton');
const feedback = document.getElementById('feedback');

// HTML structure for the challenge
const baseHtml = `
    <div class="sky"></div>
    <div class="sun"></div>
    <div class="water"></div>
`;

const targetCSS = `
    body {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #87CEEB;
    }
    .sky {
        position: absolute;
        top: 0;
        width: 100%;
        height: 50%;
        background-color: #FFDDC1;
    }
    .sun {
        position: absolute;
        bottom: 50%;
        left: 50%;
        width: 100px;
        height: 100px;
        background-color: #FFA500;
        border-radius: 50%;
        transform: translate(-50%, 50%);
    }
    .water {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50%;
        background-color: #4682B4;
    }
`;

// Function to submit CSS and update the design preview
submitButton.addEventListener('click', () => {
    const playerCSS = cssEditor.value;
    const doc = designPreview.contentWindow.document;

    // Apply the base HTML and player's CSS to the iframe
    doc.open();
    doc.write(`
        <style>
            ${playerCSS}
        </style>
        ${baseHtml}
    `);
    doc.close();

    // Provide feedback based on player's submission
    if (playerCSS === targetCSS.trim()) {
        feedback.textContent = 'Perfect! You matched the design!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Keep trying! Your design doesn’t fully match the theme yet.';
        feedback.style.color = 'red';
    }
});

// Load initial design preview
function loadInitialPreview() {
    const doc = designPreview.contentWindow.document;
    doc.open();
    doc.write(`
        <style>
            ${targetCSS}
        </style>
        ${baseHtml}
    `);
    doc.close();
}

// Initialize game by loading the target design
loadInitialPreview();
