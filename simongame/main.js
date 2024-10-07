let started = false;
let level = 0;
let gamePattern = [];
let userPattern = [];
let colours = ["red", "green", "yellow", "blue"];

$(document).on("keypress", function() {
    if (!started) {
        $("h1").text("LEVEL " + level);
        generateSequence();
        started = true;
    }
});

$(document).on("click", function() {
    if (!started) {
        $("h1").text("LEVEL " + level);
        generateSequence();
        started = true;
    }
});

$("button").on("click", function() {
    let userChoice = $(this).attr("id");
    userPattern.push(userChoice); 
    playSound(userChoice);
    animatePress(userChoice);
    checkAnswer(userPattern.length - 1);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userPattern[currentLevel]) { 
        console.log("success");

        if (userPattern.length === gamePattern.length) { 
            setTimeout(function() {
                generateSequence();
            }, 1000);
        }

    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function generateSequence() {
    userPattern = [];
    level++;
    $("h1").text("LEVEL " + level);
    let randomNumber = Math.floor(Math.random() * 4); 
    let randomChosenColour = colours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(colour) {
    var audio = new Audio("sounds/" + colour + ".mp3");
    audio.play();
}

function startOver() {
    setTimeout(function() {
        level = 0;
        started = false;
        gamePattern = [];
    }, 1000);
}

function animatePress(userChoice) {
    $("#" + userChoice).addClass("pressed");
    setTimeout(() => {
        $("#" + userChoice).removeClass("pressed");
    }, 100);
}
