// DOM Elements
const timer = document.querySelector(".timer");
const quizContainer = document.getElementById("container");
const nextButton = document.getElementById("next-button");
const numOfQuestions = document.querySelector(".number-of-questions");
const displayContainer = document.getElementById("display-container");
const scoreContainer = document.querySelector(".score-container");
const restart = document.getElementById("restart");
const userScore = document.getElementById("user-score");
const startScreen = document.querySelector(".start-screen");
const startButton = document.getElementById("start-button");

// Game State
let questionCount = 0;
let scoreCount = 0;
let count = 11;
let countdown;
let quizArray = [];

// Constants
const QUESTION_TIME = 10;
const TOTAL_QUESTIONS = 10;
const HEX_CHARS = "0123456789ABCDEF".split("");

// Generate random hex color
const generateColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)];
    }
    return color;
};

// Generate quiz questions
const populateQuiz = () => {
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
        const correctColor = generateColor();
        const options = [correctColor];
        
        // Generate 3 different incorrect options
        while (options.length < 4) {
            const newColor = generateColor();
            if (!options.includes(newColor)) {
                options.push(newColor);
            }
        }

        quizArray.push({
            correct: correctColor,
            options: options
        });
    }
};

// Timer functionality
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timer.innerHTML = `<span>Time Left: </span>${count}s`;
        if (count === 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

// Display next question
const displayNext = () => {
    questionCount++;
    if (questionCount === quizArray.length) {
        // Game Over
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML = `Your score is ${scoreCount} out of ${questionCount}`;
    } else {
        // Next Question
        numOfQuestions.innerHTML = `${questionCount + 1} of ${quizArray.length} Questions`;
        quizDisplay(questionCount);
        count = QUESTION_TIME;
        clearInterval(countdown);
        timerDisplay();
    }
    nextButton.classList.add("hide");
};

// Display quiz question
const quizDisplay = (questionCount) => {
    const cards = document.querySelectorAll(".container-mid");
    cards.forEach(card => card.classList.add("hide"));
    cards[questionCount]?.classList.remove("hide");
};

// Create quiz HTML
const quizCreator = () => {
    quizContainer.innerHTML = "";
    quizArray.forEach((question, index) => {
        const div = document.createElement("div");
        div.classList.add("container-mid");
        if (index !== 0) div.classList.add("hide");

        div.innerHTML = `
            <p class="question">
                <div class="question-color" style="background-color: ${question.correct}"></div>
            </p>
            <div class="button-container">
                ${question.options
                    .sort(() => Math.random() - 0.5)
                    .map(option => `
                        <button class="option-div" 
                                style="background-color: ${option}"
                                data-option="${option}">
                        </button>
                    `).join("")}
            </div>
        `;
        quizContainer.appendChild(div);
    });
};

// Check answer
const checker = (userOption) => {
    const userSolution = userOption.getAttribute("data-option");
    const question = document.getElementsByClassName("container-mid")[questionCount];
    const options = question.querySelectorAll(".option-div");

    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        options.forEach(element => {
            if (element.getAttribute("data-option") === quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    clearInterval(countdown);
    options.forEach(element => element.disabled = true);
    nextButton.classList.remove("hide");
};

// Initialize game
const initial = () => {
    quizArray = [];
    questionCount = 0;
    scoreCount = 0;
    count = QUESTION_TIME;
    clearInterval(countdown);
    
    populateQuiz();
    quizCreator();
    timerDisplay();
};

// Event Listeners
nextButton.addEventListener("click", displayNext);

restart.addEventListener("click", () => {
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
    initial();
});

startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

// Event delegation for option clicks
quizContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("option-div") && !e.target.disabled) {
        checker(e.target);
    }
});