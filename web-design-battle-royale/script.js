const cssEditor = document.getElementById('cssEditor');
const applyStylesButton = document.getElementById('applyStyles');
const previewFrame = document.getElementById('previewFrame');
const screenButtons = document.querySelectorAll('.screen-button');
const checkResponsivenessButton = document.getElementById('checkResponsiveness');
const scoreValue = document.getElementById('scoreValue');
const feedback = document.getElementById('feedback');

let currentWidth = 1024;
let currentHeight = 768;

// Initial content for the iframe
const initialContent = `
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                text-align: center;
            }
            h1 {
                background-color: lightblue;
                padding: 20px;
            }
            .dynamic-content {
                margin: 20px auto;
                width: 80%;
                padding: 20px;
                background-color: lightcoral;
            }
        </style>
    </head>
    <body>
        <h1>This is a Responsive Design Challenge</h1>
        <p class="dynamic-content">Your task is to make this page look good on all devices!</p>
    </body>
    </html>
`;

// Load the initial content into the iframe
previewFrame.srcdoc = initialContent;

// Apply CSS written by the player
applyStylesButton.addEventListener('click', () => {
    const userCSS = cssEditor.value;
    const combinedContent = `
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    text-align: center;
                }
                h1 {
                    background-color: lightblue;
                    padding: 20px;
                }
                .dynamic-content {
                    margin: 20px auto;
                    width: 80%;
                    padding: 20px;
                    background-color: lightcoral;
                }
                /* User CSS */
                ${userCSS}
            </style>
        </head>
        <body>
            <h1>This is a Responsive Design Challenge</h1>
            <p class="dynamic-content">Your task is to make this page look good on all devices!</p>
        </body>
        </html>
    `;
    previewFrame.srcdoc = combinedContent;
});

// Handle screen resizing
screenButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentWidth = button.getAttribute('data-width');
        currentHeight = button.getAttribute('data-height');
        previewFrame.style.width = `${currentWidth}px`;
        previewFrame.style.height = `${currentHeight}px`;
    });
});

// Check responsiveness by comparing the CSS properties for different screen sizes
checkResponsivenessButton.addEventListener('click', () => {
    let score = 0;

    // Example simple scoring system
    if (cssEditor.value.includes('@media')) {
        score += 50;
        feedback.textContent = 'Good job using media queries!';
    }

    // Check if the design is responsive by adjusting certain widths dynamically
    if (cssEditor.value.includes('width: 100%') || cssEditor.value.includes('max-width')) {
        score += 50;
        feedback.textContent = 'Great! Your design adapts to different screen sizes.';
    }

    // Update score
    scoreValue.textContent = score;
    if (score === 100) {
        feedback.textContent += ' Perfect score!';
    } else if (score < 50) {
        feedback.textContent = 'Try to make the design more adaptive.';
    }
});
