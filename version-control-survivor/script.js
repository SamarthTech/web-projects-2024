const challengeTitle = document.getElementById('challengeTitle');
const challengeDescription = document.getElementById('challengeDescription');
const challengePrompt = document.getElementById('challengePrompt');
const solutionEditor = document.getElementById('solutionEditor');
const submitSolution = document.getElementById('submitSolution');
const feedback = document.getElementById('feedback');
const scoreValue = document.getElementById('scoreValue');

let score = 0;

// List of Git challenges
const challenges = [
    {
        title: 'Create a new branch',
        prompt: 'Use Git to create a new branch named "feature-xyz".',
        correctAnswer: 'git checkout -b feature-xyz'
    },
    {
        title: 'Merge branches',
        prompt: 'Merge the branch "feature-xyz" into "main".',
        correctAnswer: 'git checkout main\n git merge feature-xyz'
    },
    {
        title: 'Stage changes',
        prompt: 'Stage all changes in the current directory for commit.',
        correctAnswer: 'git add .'
    },
    {
        title: 'Commit changes',
        prompt: 'Commit changes with the message "Update README".',
        correctAnswer: 'git commit -m "Update README"'
    },
    {
        title: 'Push changes',
        prompt: 'Push the current branch to the remote repository.',
        correctAnswer: 'git push origin main'
    }
];

// Function to start a new challenge
function startChallenge() {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomIndex];
    challengeTitle.textContent = challenge.title;
    challengePrompt.textContent = challenge.prompt;
    solutionEditor.value = '';
    feedback.textContent = '';
}

// Function to check the player's solution
function checkSolution() {
    const playerAnswer = solutionEditor.value.trim();
    const challenge = challenges.find(ch => ch.prompt === challengePrompt.textContent);
    
    if (playerAnswer === challenge.correctAnswer) {
        feedback.textContent = 'Correct! You earned a point!';
        feedback.style.color = 'green';
        score++;
    } else {
        feedback.textContent = `Incorrect! The correct answer was:\n${challenge.correctAnswer}`;
        feedback.style.color = 'red';
    }
    
    scoreValue.textContent = score;
    startChallenge();  // Start a new challenge after checking the answer
}

// Event listener for submitting the solution
submitSolution.addEventListener('click', checkSolution);

// Initialize the game
startChallenge();
