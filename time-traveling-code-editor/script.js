const travelButton = document.getElementById('travelButton');
const currentEraSpan = document.getElementById('currentEra');
const challengeText = document.getElementById('challengeText');
const codeEditor = document.getElementById('codeEditor');
const submitButton = document.getElementById('submitButton');
const outputFrame = document.getElementById('outputFrame');
const feedback = document.getElementById('feedback');

// Different coding "eras" with challenges
const eras = [
    {
        era: '1990s',
        challenge: 'Fix the HTML code to make this heading visible!',
        startingCode: '<HTML><HEAD><TITLE>My Page</TITLE></HEAD><BODY><H1>heading</H1></BODY></HTML>',
        correctCode: '<html><head><title>My Page</title></head><body><h1>Heading</h1></body></html>',
    },
    {
        era: '2000s',
        challenge: 'Add CSS to style this text in blue!',
        startingCode: '<html><head><title>Styled Page</title></head><body><p>This is some text.</p></body></html>',
        correctCode: '<html><head><title>Styled Page</title><style>p { color: blue; }</style></head><body><p>This is some text.</p></body></html>',
    },
    {
        era: '2010s',
        challenge: 'Make this page mobile responsive using meta tags!',
        startingCode: '<html><head><title>Responsive Page</title></head><body><h1>Responsive Design</h1></body></html>',
        correctCode: '<html><head><title>Responsive Page</title><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body><h1>Responsive Design</h1></body></html>',
    },
];

let currentEraIndex = 0;

// Initialize the game with the first era
function loadEra() {
    const currentEra = eras[currentEraIndex];
    currentEraSpan.textContent = `Current Era: ${currentEra.era}`;
    challengeText.textContent = currentEra.challenge;
    codeEditor.value = currentEra.startingCode;
    feedback.textContent = '';
    outputFrame.srcdoc = '';
}

// Check the player's code against the correct answer
function checkCode() {
    const userCode = codeEditor.value.trim();
    const currentEra = eras[currentEraIndex];
    
    if (userCode === currentEra.correctCode) {
        feedback.textContent = 'Congratulations! You fixed the code!';
        outputFrame.srcdoc = userCode;
    } else {
        feedback.textContent = 'Keep trying, something is still off!';
    }
}

// Switch to the next era
function timeTravel() {
    currentEraIndex = (currentEraIndex + 1) % eras.length;
    loadEra();
}

// Event listeners
travelButton.addEventListener('click', timeTravel);
submitButton.addEventListener('click', checkCode);

// Load the first era initially
loadEra();
