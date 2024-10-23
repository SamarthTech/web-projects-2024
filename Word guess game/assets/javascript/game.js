var possibleWords = [
  "GRAND CANYON", 
  "ROCKY MOUNTAIN", 
  "ZION", 
  // "YELLOWSTONE",
  // "YOSEMITE", 
  // "GRAND TETON", 
  // "GLACIER", 
  // "ACADIA", 
  // "MAMMOTH CAVE", 
  // "OLYMPIC", 
  // "GREAT SMOKY MOUNTAINS",
  // "ARCHES",
  // "BRYCE CANYON",
  // "CARLSBAD CAVERNS",
  // "CRATER LAKE",
  // "DEATH VALLEY",
  // "DENALI",
  // "JOSHUA TREE",
  // "CAPITOL REEF",
  // "CANYON LANDS",
  // "BADLANDS",
  // "BIG BEND",
  // "SEQUOIA",
  // "BISCAYNE",
  // "SHENANDOAH",
  // "HOT SPRINGS",
  // "MOUNT RANIER",
  // "SAGUARO",
  // "KINGS CANYON",
  // "EVERGLADES",
  // "MESA VERDE",
  // "REDWOOD",
  // "CHANNEL ISLANDS",
  // "BLACK CANYON OF THE GUNNISON",
  // "CONGAREE",
  // "CUYAHOGA VALLEY",
  // "DRY TORTUGAS",
  // "GATEWAY ARCH",
  // "GATES OF THE ARCTIC",
  // "AMERICAN SAMOA",
  // "GLACIER BAY",
  // "GREAT BASIN",
  // "GUADALUPE MOUNTAINS",
  // "HAWAII VOLCANOES",
  // "HOT SPRINGS",
  // "INDIANA DUNES",
  // "KATMAI",
  // "KENAI FJORDS",
  // "LASSEN VOLCANIC",
  // "NORTH CASCADES",
  // "PETRIFIED FOREST",
  // "PINNACLES",
  // "THEODORE ROOSEVELT",
  // "VIRGIN ISLANDS",
  // "VOYAGEURS",
  // "WRANGELL ST ELIAS",
  // "WIND CAVE",
  // "KOBUK VALLEY",
  // "LAKE CLARK",
  // "ISLE ROYALE",
  // "HALEAKALA"
];

var guessedLetters = [];
var guessingWord = [];
var usedGuessingwWords = [];
var wordToMatch;
var numGuess;
var wins = 0;
var pause = false; // This var and setTimout function to not listen for keypress while game resets
var loseSound = new Audio("./assets/sounds/ahahah.mp3");
var winSound = new Audio("./assets/sounds/clever.wav");
var championSound = new Audio("./assets/sounds/crazysob.mp3");

//Starts game
function initializeGame() {

  // Get a new word
  wordToMatch = possibleWords[Math.floor(Math.random() * possibleWords.length)].toUpperCase();
  // Set number of guesses (higher or lower) based on word length
  if (wordToMatch.length <= 4) {
    numGuess = 4
  } else if (wordToMatch.length >4 && wordToMatch.length <= 7) {
    numGuess = Math.floor(wordToMatch.length * .67)
  } else if (wordToMatch.length >7 && wordToMatch.length <= 10) {
    numGuess = Math.floor(wordToMatch.length * .5)
  } else if (wordToMatch.length >10 && wordToMatch.length <= 14) {
    numGuess = Math.floor(wordToMatch.length * .52)
  } else if (wordToMatch.length >14) {
    numGuess = 7;
  }

  // Get underscores for guessingWord from wordToMatch
  for (var i=0; i < wordToMatch.length; i++){
    // Put a space instead of an underscore between multi-word options in possibleWords array
    if (wordToMatch[i] === " ") {
      guessingWord.push(" ")
    } 
    else {
      guessingWord.push("_");
    }
  }
  updateDisplay();
};

//Reset the game
function resetGame() {
  if (usedGuessingwWords.length === possibleWords.length) {
    championSound.play() // Toggle line comment on for almost the entire possibleWords array to hear this end of game sound clip
    usedGuessingwWords = []
    wins = 0
    setTimeout(resetGame, 6000); // Note for future change - shorten possibleWords, make jumbotron display congratulatory message upon guessing all possibilites
  }
  else {
    pause = false;
    // Restores blinking "...get started" message
    document.getElementById('welcome').className = 'blink';
    
    // Get a new word
    wordToMatch = possibleWords[Math.floor(Math.random() * possibleWords.length)].toUpperCase();
    console.log(wordToMatch)
    // If new word has already been used randomly select another
    if (usedGuessingwWords.includes(wordToMatch) === true) {
      resetGame();
    }
    
    // Set number of guesses (higher or lower) based on word length
    if (wordToMatch.length <= 4) {
      numGuess = 4
    } else if (wordToMatch.length >4 && wordToMatch.length <= 7) {
      numGuess = Math.floor(wordToMatch.length * .67)
    } else if (wordToMatch.length >7 && wordToMatch.length <= 10) {
      numGuess = Math.floor(wordToMatch.length * .5)
    } else if (wordToMatch.length >10 && wordToMatch.length <= 14) {
      numGuess = Math.floor(wordToMatch.length * .52)
    } else if (wordToMatch.length >14) {
      numGuess = 7;
    }

    // Reset word arrays
    guessedLetters = [];
    guessingWord = [];

    // Reset the guessed word
    for (var i=0; i < wordToMatch.length; i++){
      // Put a space instead of an underscore between multi-word options in possibleWords array
      if (wordToMatch[i] === " ") {
        guessingWord.push(" ")
      } 
      else {
        guessingWord.push("_");
      }
    }
    updateDisplay();
  }
};

// Update the Display
function updateDisplay () {
  document.getElementById("totalWins").innerText = wins;
  document.getElementById("currentWord").innerText = guessingWord.join("");
  document.getElementById("remainingGuesses").innerText = numGuess;
  document.getElementById("guessedLetters").innerText =  guessedLetters.join(" ");
};

// Wait for key press
document.onkeydown = function(event) {
  // Make sure key pressed is an alpha character
  if (isLetter(event.key) && pause === false) {
  checkForLetter(event.key.toUpperCase());
  }
  // Turn off blinking "...get started" message on keypress
  document.getElementById('welcome').className = 'noBlink';
};

// Check if key pressed is between A-Z or a-z
var isLetter = function(ch){
  return typeof ch === "string" && ch.length === 1
  && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
};

// Check if letter is in word
function checkForLetter(letter) {
  var foundLetter = false;

  // Search string for letter
  for (var i=0; i < wordToMatch.length; i++) {
    if (letter === wordToMatch[i]) {
      guessingWord[i] = letter
      foundLetter = true
      // If guessing word matches random word
      if (guessingWord.join("") === wordToMatch) {
        // Increment # of wins and add word to usedGuessingWords
        wins++
        // Add word to usedGuessingWords array to not be repeated
        usedGuessingwWords.push(wordToMatch)
        console.log(usedGuessingwWords)
        pause = true;
        winSound.play();
        updateDisplay();
        setTimeout(resetGame, 4000);
      }
    }
  }
  if (foundLetter === false) {
    // Check if inccorrect guess is already on the list
    if (guessedLetters.includes(letter) === false) {
      // Add incorrect letter to guessed letter list
      guessedLetters.push(letter)
      // Decrement the number of remaining guesses
      numGuess--
    }
    if (numGuess === 0) {
      // Add word to usedGuessingWords array to not be repeated
      usedGuessingwWords.push(wordToMatch);
      console.log(usedGuessingwWords)
      // Display word before reseting game
      guessingWord = wordToMatch.split();
      pause = true;
      loseSound.play();
      setTimeout(resetGame, 4000);
    }
  }
  updateDisplay();
};

initializeGame();
