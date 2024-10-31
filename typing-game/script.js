const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript is a versatile language.",
    "Web development is fun and challenging.",
    "Typing speed is a useful skill to improve.",
    "Frontend and backend developers often collaborate."
];

const elements = {
    startButton: document.getElementById("startButton"),
    sentenceDisplay: document.getElementById("sentence"),
    inputText: document.getElementById("inputText"),
    timeLeftDisplay: document.getElementById("timeLeft"),
    wpmDisplay: document.getElementById("wpm"),
    accuracyDisplay: document.getElementById("accuracy"),
    feedbackDisplay: document.getElementById("feedback"),
    highScoreDisplay: document.getElementById("highScore"),
    difficultySelector: document.getElementById("difficulty")
};

let gameState = {
    timeLeft: 0,
    timer: null,
    selectedSentence: "",
    highScore: localStorage.getItem("highScore") || 0,
    isGameRunning: false,
    startTime: null
};

elements.highScoreDisplay.textContent = gameState.highScore;

function initializeGame() {
    setEventListeners();
}

function setEventListeners() {
    elements.startButton.addEventListener("click", startGame);
    elements.inputText.addEventListener("input", handleTyping);
}

function startGame() {
    resetGame();
    setGameDifficulty();
    selectRandomSentence();
    prepareGameUI();
    startTimer();
}

function resetGame() {
    clearInterval(gameState.timer);
    gameState.isGameRunning = true;
    elements.feedbackDisplay.textContent = "";
    elements.wpmDisplay.textContent = "0";
    elements.accuracyDisplay.textContent = "0";
    elements.inputText.value = "";
    elements.inputText.disabled = false;
    elements.startButton.disabled = true;
}

function setGameDifficulty() {
    const difficulty = elements.difficultySelector.value;
    if (difficulty === "easy") gameState.timeLeft = 45;
    else if (difficulty === "medium") gameState.timeLeft = 30;
    else gameState.timeLeft = 15;
    elements.timeLeftDisplay.textContent = gameState.timeLeft;
}

function selectRandomSentence() {
    gameState.selectedSentence = sentences[Math.floor(Math.random() * sentences.length)];
    elements.sentenceDisplay.innerHTML = highlightSentence(0);
}

function prepareGameUI() {
    elements.inputText.focus();
    gameState.startTime = new Date().getTime();
}

function startTimer() {
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        elements.timeLeftDisplay.textContent = gameState.timeLeft;

        if (gameState.timeLeft <= 0) endGame();
    }, 1000);
}

function handleTyping() {
    if (!gameState.isGameRunning) return;

    const typedText = elements.inputText.value;
    updateSentenceHighlight(typedText);
    updateAccuracy(typedText);
    calculateAndUpdateWPM();
}

function updateSentenceHighlight(typedText) {
    const currentWordIndex = typedText.trim().split(" ").length - 1;
    elements.sentenceDisplay.innerHTML = highlightSentence(currentWordIndex);
}

function highlightSentence(currentWordIndex) {
    const words = gameState.selectedSentence.split(" ");
    words[currentWordIndex] = `<span class="highlighted">${words[currentWordIndex]}</span>`;
    return words.join(" ");
}

function updateAccuracy(typedText) {
    let correctChars = 0;
    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === gameState.selectedSentence[i]) correctChars++;
    }
    const accuracy = Math.round((correctChars / gameState.selectedSentence.length) * 100);
    elements.accuracyDisplay.textContent = accuracy;
}

function calculateAndUpdateWPM() {
    const elapsedTime = (new Date().getTime() - gameState.startTime) / 1000 / 60; // in minutes
    const wordsTyped = elements.inputText.value.trim().split(" ").length;
    const wpm = Math.round(wordsTyped / elapsedTime);
    elements.wpmDisplay.textContent = wpm;
}

function endGame() {
    clearInterval(gameState.timer);
    gameState.isGameRunning = false;
    elements.inputText.disabled = true;
    elements.startButton.disabled = false;
    calculateFinalResults();
}

function calculateFinalResults() {
    const typedText = elements.inputText.value.trim();
    const wordsTyped = typedText.split(" ").length;
    const elapsedTime = (30 - gameState.timeLeft) / 60;
    const wpm = Math.round(wordsTyped / elapsedTime);
    const accuracy = calculateFinalAccuracy(typedText);

    updateHighScore(wpm);
    elements.feedbackDisplay.textContent = getFeedbackMessage(wpm);
    elements.wpmDisplay.textContent = wpm;
    elements.accuracyDisplay.textContent = accuracy;
}

function calculateFinalAccuracy(typedText) {
    let correctChars = 0;
    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === gameState.selectedSentence[i]) correctChars++;
    }
    return Math.round((correctChars / gameState.selectedSentence.length) * 100);
}

function updateHighScore(wpm) {
    if (wpm > gameState.highScore) {
        gameState.highScore = wpm;
        localStorage.setItem("highScore", gameState.highScore);
        elements.highScoreDisplay.textContent = gameState.highScore;
    }
}

function getFeedbackMessage(wpm) {
    if (wpm > 80) return "Amazing speed! Keep it up!";
    else if (wpm > 50) return "Great job! You're doing well.";
    return "Keep practicing to improve your speed!";
}

initializeGame();
