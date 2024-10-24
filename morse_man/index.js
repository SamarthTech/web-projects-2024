import alphabetToMorse from "./assets/js/alphabetToMorse.js";

const dotButton = document.getElementById("dotButton");
const dashButton = document.getElementById("dashButton");

const deleteButton = document.getElementById("deleteButton");
const submitButton = document.getElementById("submitButton");
const retryButton = document.getElementById("retry");

const inputMorseEl = document.getElementById("inputMorse");

const liveLeftEl = document.getElementById("liveLeft");
const correctsEl = document.getElementById("corrects");

const damagedEl = document.getElementById("damaged");
const loserEl = document.getElementById("loser");

const actualMorseEl = document.getElementById("actualMorse");
const actualWordEl = document.getElementById("actualWord");

const containerWordDisplay = document.querySelector(".container-wordDisplay");

let playing = false;

let inputMorse = "";
let secondary;

let currWord;
let currentMorse;

let lives = 5;
let corrects = 0;

async function init() {
    containerWordDisplay.innerHTML = "";
    damagedEl.style.display = "none";
    loserEl.style.display = "none";
    lives = 5;
    liveLeftEl.innerHTML = `&#9829 ${lives}`;
    inputMorse = "";
    inputMorseEl.textContent = "";
    currWord = await getRandomWord();
    currentMorse = wordToMorse(currWord);
    render(currentMorse);
    secondary = new Array(currentMorse.length).fill("?");
    playing = true;
}

async function getRandomWord() {
    const response = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await response.json();
    return data[0];
}

function wordToMorse(str) {
    return str.split("").map((char) => alphabetToMorse[char.toLowerCase()]);
}

function handleGuess(input) {
    containerWordDisplay.classList.add("guess");
    const staticAudio = new Audio("./assets/sounds/static-pixabay.mp3");
    staticAudio.play();
    let foundDupe = false;
    let foundAny = false;

    for (let i = 0; i < currentMorse.length; i++) {
        if (input === currentMorse[i]) {
            foundAny = true;
            if (secondary[i] !== "?") {
                foundDupe = true;
                break;
            } else {
                secondary[i] = input;
            }
        }
    }

    setTimeout(() => {
        staticAudio.pause();
        staticAudio.currentTime = 0;
        containerWordDisplay.classList.remove("guess");

        if (!foundAny || foundDupe) {
            lives--;
            liveLeftEl.innerHTML = `&#9829 ${lives}`;
            damagedEl.style.display = "block";
            if (lives === 0) {
                loserEl.style.display = "flex";
                actualMorseEl.textContent = currentMorse.join(" ");
                actualWordEl.textContent = currWord;
                playing = false;
                return;
            }
        }
        playing = true;
        setTimeout(() => {
            damagedEl.style.display = "none";
        }, 250);
    }, 1000);

    const wordHtml = secondary
        .map((letter) => {
            const span = document.createElement("span");
            span.classList.add("letter");
            span.textContent = letter;
            return span.outerHTML;
        })
        .join(" ");

    containerWordDisplay.innerHTML = wordHtml;

    if (secondary.every((item) => item !== "?")) {
        handleWin();
        return;
    }
}

function handleWin() {
    playing = false;
    containerWordDisplay.innerHTML += `<span>Actual word: ${currWord}</span>`;
    setTimeout(() => {
        init();
        corrects++;
        correctsEl.innerHTML = `&#10003 ${corrects}`;
    }, 5000);
}

function render(morse) {
    const wordHtml = morse.map(() => '<span class="letter">?</span>').join(" ");
    containerWordDisplay.innerHTML = wordHtml;
}

function updateInputMorse(char) {
    if (playing && inputMorse.length < 4) {
        if (char === ".") {
            const dot = new Audio("./assets/sounds/dot.wav");
            dot.play();
        } else {
            const dash = new Audio("./assets/sounds/dash.wav");
            dash.play();
        }
        inputMorse += char;
        inputMorseEl.textContent = inputMorse;
    }
}

dotButton.addEventListener("click", () => updateInputMorse("."));
dashButton.addEventListener("click", () => updateInputMorse("-"));

deleteButton.addEventListener("click", () => {
    if (playing && inputMorse.length > 0) {
        inputMorse = inputMorse.slice(0, -1);
        inputMorseEl.innerHTML = inputMorse;
    }
});

submitButton.addEventListener("click", () => {
    if (playing) {
        const input = inputMorseEl.textContent;
        playing = false;
        handleGuess(input);
    }
});

retryButton.addEventListener("click", function () {
    init();
});

init();
