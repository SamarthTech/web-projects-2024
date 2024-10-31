document.addEventListener('DOMContentLoaded', function() {
    const levels = [
        { code: '2007', hint: 'The first iPhone was released in this year' },
        { code: 'RGBY', hint: 'Think rainbow colors in reverse: Yellow, Blue, Green, Red' },
        { code: '5', hint: 'First subtract 7 from both sides: 3x = 15' }
    ];

    let currentLevel = 1;
    let hintsRemaining = 3;
    let timeRemaining = 300; // 5 minutes
    let timerInterval;

    // Initialize game
    startTimer();
    updateProgressBar();

    // Event Listeners
    document.getElementById('submitBtn').addEventListener('click', checkAnswer);
    document.getElementById('hintBtn').addEventListener('click', showHint);

    function startTimer() {
        timerInterval = setInterval(() => {
            timeRemaining--;
            updateTimerDisplay();
            
            if (timeRemaining <= 0) {
                gameOver();
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        document.getElementById('timeDisplay').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function updateProgressBar() {
        const progress = ((currentLevel - 1) / levels.length) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
        document.getElementById('levelDisplay').textContent = currentLevel;
    }

    function showMessage(text, isSuccess) {
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = text;
        messageDiv.className = isSuccess ? 'success' : 'error';
        messageDiv.style.display = 'block';
        
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 3000);
    }

    function showHint() {
        if (hintsRemaining > 0) {
            document.getElementById('hintText').textContent = levels[currentLevel - 1].hint;
            hintsRemaining--;
            document.getElementById('hintsRemaining').textContent = `Hints remaining: ${hintsRemaining}`;
        } else {
            showMessage('No hints remaining!', false);
        }
    }

    function checkAnswer() {
        const currentInput = document.querySelector('.level.active input');
        const userAnswer = currentInput.value.toUpperCase();
        const correctAnswer = levels[currentLevel - 1].code;

        if (userAnswer === correctAnswer) {
            if (currentLevel === levels.length) {
                gameWon();
            } else {
                showMessage('Correct! Moving to next level...', true);
                currentLevel++;
                switchLevel();
                updateProgressBar();
                currentInput.value = '';
            }
        } else {
            showMessage('Incorrect! Try again.', false);
            currentInput.classList.add('shake');
            setTimeout(() => {
                currentInput.classList.remove('shake');
            }, 500);
        }
    }

    function switchLevel() {
        document.querySelectorAll('.level').forEach(level => {
            level.classList.remove('active');
        });
        document.getElementById(`level${currentLevel}`).classList.add('active');
    }

    function gameWon() {
        clearInterval(timerInterval);
        showMessage('Congratulations! You\'ve escaped!', true);
        disableGame();
    }

    function gameOver() {
        clearInterval(timerInterval);
        showMessage('Time\'s up! Game Over!', false);
        disableGame();
    }

    function disableGame() {
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('hintBtn').disabled = true;
        document.querySelectorAll('input').forEach(input => {
            input.disabled = true;
        });
    }
});