const bugAlert = document.getElementById('bugAlert');
const bugTitle = document.getElementById('bugTitle');
const bugDescription = document.getElementById('bugDescription');
const codeEditor = document.getElementById('codeEditor');
const submitButton = document.getElementById('submitButton');
const feedback = document.getElementById('feedback');
const cityStatus = document.getElementById('cityStatus');
const timeLeftDisplay = document.getElementById('timeLeft');

let currentBug = null;
let gameTimer = null;
let timeLeft = 60;  // Total game time in seconds
let cityHealth = 100;

// List of bugs (coding challenges)
const bugs = [
    {
        title: 'Broken Heading',
        description: 'Fix the heading tag to display correctly.',
        code: '<H1>My City</H1>',
        correctCode: '<h1>My City</h1>'
    },
    {
        title: 'Misaligned Button',
        description: 'Center the button using CSS.',
        code: '<button>Click Me</button>',
        correctCode: '<button style="display: block; margin: 0 auto;">Click Me</button>'
    },
    {
        title: 'JavaScript Error',
        description: 'Fix the JavaScript function to log "Hello World" correctly.',
        code: 'function sayHello() { console.log(Hello World); }',
        correctCode: 'function sayHello() { console.log("Hello World"); }'
    }
];

// Start a new bug alert
function triggerBug() {
    const randomIndex = Math.floor(Math.random() * bugs.length);
    currentBug = bugs[randomIndex];
    bugTitle.textContent = currentBug.title;
    bugDescription.textContent = currentBug.description;
    codeEditor.value = currentBug.code;
    feedback.textContent = '';
}

// Check if the player's code matches the correct solution
function checkCode() {
    const playerCode = codeEditor.value.trim();
    if (playerCode === currentBug.correctCode) {
        feedback.textContent = 'Bug Fixed! The city is safe for now.';
        feedback.style.color = 'green';
        cityHealth += 10;  // Reward health for fixing bugs
        cityHealth = Math.min(cityHealth, 100);  // Cap at 100
        triggerBug();  // Trigger the next bug
    } else {
        feedback.textContent = 'Incorrect! Keep trying...';
        feedback.style.color = 'red';
    }
}

// Decrease city health if the bug is not fixed in time
function decreaseCityHealth() {
    cityHealth -= 20;
    if (cityHealth <= 0) {
        cityStatus.textContent = 'Destroyed';
        cityStatus.style.color = 'red';
        clearInterval(gameTimer);
        bugTitle.textContent = 'Game Over';
        bugDescription.textContent = 'The city has been destroyed by bugs.';
    } else {
        cityStatus.textContent = `In Danger (Health: ${cityHealth}%)`;
        cityStatus.style.color = 'orange';
    }
}

// Start the countdown for the game
function startGame() {
    gameTimer = setInterval(() => {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(gameTimer);
            bugTitle.textContent = 'Game Over';
            bugDescription.textContent = 'You ran out of time!';
        }
    }, 1000);
}

// Event listeners
submitButton.addEventListener('click', checkCode);

// Initialize the game
triggerBug();
startGame();
