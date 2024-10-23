const cells = document.querySelectorAll('.cell');
const scoreXDisplay = document.getElementById('scoreX');
const scoreODisplay = document.getElementById('scoreO');
const scoreDrawDisplay = document.getElementById('scoreDraw');
const resetBtn = document.getElementById('resetBtn');
const difficultySelect = document.getElementById('difficulty');

let currentPlayer = 'X';
let scores = { X: 0, O: 0, draws: 0 };
let boardState = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let aiDifficulty = 'easy';

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(e) {
    const cell = e.target;
    const index = cell.getAttribute('data-index');

    if (boardState[index] !== '' || !gameActive) {
        return;
    }

    boardState[index] = currentPlayer;
    cell.innerHTML = currentPlayer;

    if (checkWinner()) {
        endGame(currentPlayer);
    } else if (boardState.includes('')) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        if (currentPlayer === 'O') {
            aiMove();
        }
    } else {
        endGame(null); // Draw
    }
}

function checkWinner() {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            highlightWinner(condition);
            return true;
        }
    }
    return false;
}

function highlightWinner(condition) {
    condition.forEach(index => {
        cells[index].classList.add('winner');
    });
    gameActive = false;
}

function endGame(winner) {
    if (winner) {
        scores[winner]++;
        alert(`Player ${winner} wins!`);
    } else {
        scores.draws++;
        alert('It\'s a draw!');
    }
    updateScores();
    gameActive = false;
}

function updateScores() {
    scoreXDisplay.innerText = scores.X;
    scoreODisplay.innerText = scores.O;
    scoreDrawDisplay.innerText = scores.draws;
}

function aiMove() {
    let bestMove;

    if (aiDifficulty === 'easy') {
        // Random move for easy AI
        const availableCells = boardState.map((value, index) => value === '' ? index : null).filter(index => index !== null);
        bestMove = availableCells[Math.floor(Math.random() * availableCells.length)];
    } else {
        // Minimax algorithm for hard AI
        bestMove = minimax(boardState, currentPlayer).index;
    }

    boardState[bestMove] = currentPlayer;
    cells[bestMove].innerHTML = currentPlayer;

    if (checkWinner()) {
        endGame(currentPlayer);
    } else if (!boardState.includes('')) {
        endGame(null); // Draw
    } else {
        currentPlayer = 'X'; // Switch back to player X
    }
}

function minimax(board, player) {
    const availableCells = board.map((value, index) => value === '' ? index : null).filter(index => index !== null);
    if (checkWin(board, 'X')) return { score: -10 };
    if (checkWin(board, 'O')) return { score: 10 };
    if (availableCells.length === 0) return { score: 0 };

    let moves = [];
    for (let index of availableCells) {
        const move = {};
        move.index = index;
        board[index] = player;

        if (player === 'O') {
            const result = minimax(board, 'X');
            move.score = result.score;
        } else {
            const result = minimax(board, 'O');
            move.score = result.score;
        }

        board[index] = ''; // Undo the move
        moves.push(move);
    }

    let bestMove;
    if (player === 'O') {
        let bestScore = -Infinity;
        for (let move of moves) {
            if (move.score > bestScore) {
                bestScore = move.score;
                bestMove = move;
            }
        }
    } else {
        let bestScore = Infinity;
        for (let move of moves) {
            if (move.score < bestScore) {
                bestScore = move.score;
                bestMove = move;
            }
        }
    }

    return bestMove;
}

function checkWin(board, player) {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] === player && board[b] === player && board[c] === player) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    boardState = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    cells.forEach(cell => {
        cell.innerHTML = '';
        cell.classList.remove('winner');
    });
    currentPlayer = 'X'; // Reset to player X
}

// Event Listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetBtn.addEventListener('click', resetGame);
difficultySelect.addEventListener('change', (e) => {
    aiDifficulty = e.target.value;
});
