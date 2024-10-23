let questions = [
    {
        question: "Which of the following programming languages is primarily used for statistical computing and data analysis?",
        answer: [
            { text: "Python", correct: false },
            { text: "R", correct: true },
            { text: "Java", correct: false },
            { text: "C++", correct: false }
        ]
    },    
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        answer: [
            { text: "Refers to the current object context", correct: true },
            { text: "Defines a new variable", correct: false },
            { text: "Creates a function", correct: false },
            { text: "Indicates a return value", correct: false }
        ]
    },
    {
        question: "In the context of databases, what does 'ACID' stand for?",
        answer: [
            { text: "Atomicity, Consistency, Isolation, Durability", correct: true },
            { text: "Aggregation, Consistency, Integration, Durability", correct: false },
            { text: "Atomicity, Clarity, Isolation, Data", correct: false },
            { text: "Accuracy, Consistency, Isolation, Distribution", correct: false }
        ]
    },    
    {
        question: "'.MPG' extension refers to which kind of file?",
        answer: [
            { text: "Word Document File", correct: false },
            { text: "Image File", correct: false },
            { text: "Animation/movie File", correct: true },
            { text: "MS PowerPoint File", correct: false }
        ]
    },
    {
        question: "In the United States, the television broadcast standard is?",
        answer: [
            { text: "PAL", correct: false },
            { text: "NTSC", correct: true },
            { text: "RGB", correct: false },
            { text: "LAN", correct: false }
        ]
    },
    {
        question: "Which of the following individuals was NOT a co-founder of Microsoft?",
        answer: [
            { text: "Bill Gates", correct: false },
            { text: "Paul G. Allen", correct: false },
            { text: "Steve Ballmer", correct: true },
            { text: "Richard Rashid", correct: false }
        ]
    },    
    {
        question: "What is the main purpose of a DNS (Domain Name System)?",
        answer: [
            { text: "To provide web hosting services", correct: false },
            { text: "To translate domain names into IP addresses", correct: true },
            { text: "To secure web traffic", correct: false },
            { text: "To manage email servers", correct: false }
        ]
    },    
    {
        question: "Computers and cash registers in a food mart are connected to UPS. What does UPS mean?",
        answer: [
            { text: "United Parcel Service", correct: false },
            { text: "Uniform Product Support", correct: false },
            { text: "Under Panelling Storage", correct: false },
            { text: "Uninterrupted Power Supply", correct: true }
        ]
    },
    {
        question: "Who co-founded Hotmail and later sold it to Microsoft?",
        answer: [
            { text: "Sabeer Bhatia", correct: true },
            { text: "Shawn Fanning", correct: false },
            { text: "Ada Byron Lovelace", correct: false },
            { text: "Ray Tomlinson", correct: false }
        ]
    },
    {
        question: "Which type of attack involves injecting malicious scripts into web pages viewed by other users?",
        answer: [
            { text: "Cross-Site Scripting (XSS)", correct: true },
            { text: "SQL Injection", correct: false },
            { text: "Cross-Site Request Forgery (CSRF)", correct: false },
            { text: "Man-in-the-Middle", correct: false }
        ]
    }
];

const Question = document.querySelector("#ques");
const nextButton = document.querySelector("#nxt");
const answerButtonsContainer = document.getElementById("btn");
const timerDisplay = document.createElement("div");
const restart = document.querySelector("#restart");

let questionIndex = 0;
let score = 0;
let timer;

function startQuiz() {
    questionIndex = 0;
    score = 0;
    nextButton.style.display = "none"; // Hide next button initially
    restart.style.display = "none"; // Hide restart button initially
    timerDisplay.innerHTML = "Time: 60 seconds"; // Initialize timer display
    document.body.insertBefore(timerDisplay, Question); // Add timer above the question
    startTimer(60); // Start timer with 60 seconds

    showQuestion();
}

function startTimer(seconds) {
    let timeRemaining = seconds;
    timer = setInterval(() => {
        timeRemaining--;
        timerDisplay.innerHTML = `Time: ${timeRemaining} seconds`;
        if (timeRemaining <= 0) {
            clearInterval(timer);
            showScore(); // Automatically end quiz when time is up
        }
    }, 1000);
}

function showQuestion() {
    resetState(); // Clear previous buttons
    let currentQuestion = questions[questionIndex];
    let questionNo = questionIndex + 1;
    Question.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer, button));
        answerButtonsContainer.appendChild(button);
    });
}

function selectAnswer(answer, button) {
    // Highlight correct/incorrect answer
    if (answer.correct) {
        score++;
        button.classList.add("correct");
        button.style.backgroundColor="green";
    } else {
        button.classList.add("incorrect");
        button.style.backgroundColor="red";
    }

    // Disable all buttons
    const buttons = answerButtonsContainer.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = true);

    // Show next button after a delay
    setTimeout(() => {
        questionIndex++;
        if (questionIndex < questions.length) {
            showQuestion();
        } else {
            clearInterval(timer); // Clear timer if quiz ends
            showScore();
        }
    }, 500); // 1 second delay
}

function showScore() {
    Question.innerHTML = `You scored ${score} out of ${questions.length}`;
    answerButtonsContainer.innerHTML = ""; // Clear answer buttons
    timerDisplay.innerHTML = ""; // Clear timer display
    nextButton.style.display = "none"; // Hide next button
    restart.style.display = "block"; // Show restart button
}

function resetState() {
    nextButton.style.display = 'none'; // Hide the next button
    answerButtonsContainer.innerHTML = ""; // Clear previous buttons
}

function endButton() {
    restart.addEventListener("click", () => {
        // Reset quiz state
        questionIndex = 0;
        score = 0;
        restart.style.display = "none"; // Hide restart button
        timerDisplay.innerHTML = ""; // Clear timer display
        startQuiz(); // Start the quiz again
    });
}

// Start the quiz
startQuiz();
endButton();
