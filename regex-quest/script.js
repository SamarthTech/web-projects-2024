const regexInput = document.getElementById('regexInput');
const submitRegex = document.getElementById('submitRegex');
const textSample = document.getElementById('textSample');
const feedback = document.getElementById('feedback');
const scoreValue = document.getElementById('scoreValue');

let score = 0;

// List of levels with sample text, description, and expected regex patterns
const levels = [
    {
        title: 'Match Dates',
        description: 'Your goal is to match all the dates in the format DD/MM/YYYY.',
        sampleText: "John's birthday is on 12/05/1994, and Mary's birthday is on 23/07/1988.",
        correctRegex: /\b\d{2}\/\d{2}\/\d{4}\b/g
    },
    {
        title: 'Match Emails',
        description: 'Your goal is to match all the email addresses in the text.',
        sampleText: 'You can contact us at support@domain.com or sales@domain.com.',
        correctRegex: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g
    },
    {
        title: 'Match Phone Numbers',
        description: 'Your goal is to match all phone numbers in the format (XXX) XXX-XXXX.',
        sampleText: 'Call me at (123) 456-7890 or at (987) 654-3210.',
        correctRegex: /\(\d{3}\) \d{3}-\d{4}/g
    }
];

// Current level
let currentLevel = 0;

// Load the first level
function loadLevel() {
    const level = levels[currentLevel];
    document.getElementById('levelTitle').textContent = `Level ${currentLevel + 1}: ${level.title}`;
    document.getElementById('levelDescription').textContent = level.description;
    textSample.textContent = level.sampleText;
    regexInput.value = '';
    feedback.textContent = '';
}

// Function to check player's regex
function checkRegex() {
    const playerRegex = new RegExp(regexInput.value, 'g');
    const level = levels[currentLevel];

    const matchesPlayer = textSample.textContent.match(playerRegex);
    const matchesCorrect = textSample.textContent.match(level.correctRegex);

    if (matchesPlayer && matchesCorrect && matchesPlayer.length === matchesCorrect.length) {
        feedback.textContent = 'Correct! You matched all patterns!';
        feedback.style.color = 'green';
        score++;
    } else {
        feedback.textContent = 'Incorrect! Try again.';
        feedback.style.color = 'red';
    }

    scoreValue.textContent = score;
    
    // Move to next level if correct
    if (matchesPlayer && matchesPlayer.length === matchesCorrect.length) {
        currentLevel++;
        if (currentLevel < levels.length) {
            loadLevel();
        } else {
            feedback.textContent = 'Congratulations! You have completed all levels.';
            feedback.style.color = 'blue';
        }
    }
}

// Event listener for submitting the regex
submitRegex.addEventListener('click', checkRegex);

// Initialize the game
loadLevel();
