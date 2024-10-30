const body = document.body;
const html = document.documentElement;
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.style.background = "#3F0046";
body.style.background = "#3F0046";
html.style.background = "#3F0046";

canvas.width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth) - 17;
canvas.height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) - 20;

const paddleHeight = 15;
const paddleWidth = 85;
let paddleX = (canvas.width - paddleWidth) / 2;

const ballRadius = 10;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 4;
let dy = -4;

let rightPressed = false;
let leftPressed = false;

const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 35;
const brickRowCount = Math.floor(((canvas.height - brickOffsetTop) * 0.4) / (brickHeight + brickPadding));
const brickColumnCount = Math.floor(canvas.width / (brickWidth + brickPadding));
const brickOffsetLeft = (canvas.width - (brickColumnCount * (brickWidth + brickPadding))) / 2;

const bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
	bricks[c] = [];
	for (let r = 0; r < brickRowCount; r++) {
		bricks[c][r] = { x: 0, y: 0, status: 1 };
	}
}

let score = 0;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
	if (e.key === "Right" || e.key === "ArrowRight") {
		rightPressed = true;
	} else if (e.key === "Left" || e.key === "ArrowLeft") {
		leftPressed = true;
	}
}

function keyUpHandler(e) {
	if (e.key === "Right" || e.key === "ArrowRight") {
		rightPressed = false;
	} else if (e.key === "Left" || e.key === "ArrowLeft") {
		leftPressed = false;
	}
}

function collisionDetection() {
	for (let c = 0; c < brickColumnCount; c++) {
		for (let r = 0; r < brickRowCount; r++) {
			const b = bricks[c][r];
			if (b.status === 1) {
				if (
					x > b.x &&
					x < b.x + brickWidth &&
					y > b.y &&
					y < b.y + brickHeight
				) {
					dy = -dy;
					b.status = 0;
					score++;
					if (score === brickRowCount * brickColumnCount) {
						alert("YOU WIN, CONGRATULATIONS!");
						document.location.reload();
					}
				}
			}
		}
	}
}

function drawScore() {
	ctx.font = "16px Arial Bold";
	ctx.fillStyle = "#FFFFFF";
	ctx.fillText("Score: " + score, 8, 20);
}

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
	ctx.fillStyle = "#B56FBD";
	ctx.fill();
	ctx.closePath();
}

function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle = "#B56FBD";
	ctx.fill();
	ctx.closePath();
}

function drawBricks() {
	for (let c = 0; c < brickColumnCount; c++) {
		for (let r = 0; r < brickRowCount; r++) {
			if (bricks[c][r].status === 1) {
				const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
				const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
				bricks[c][r].x = brickX;
				bricks[c][r].y = brickY;
				ctx.beginPath();
				ctx.rect(brickX, brickY, brickWidth, brickHeight);
				ctx.fillStyle = "#B56FBD";
				ctx.fill();
				ctx.closePath();
			}
		}
	}
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBricks();
	drawBall();
	drawPaddle();
	drawScore();
	collisionDetection();

	if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
		dx = -dx;
	}
	if (y + dy < ballRadius) {
		dy = -dy;
	} else if (y + dy > canvas.height - ballRadius) {
		if (x > paddleX && x < paddleX + paddleWidth) {
			dy = -dy;
		} else {
			if (confirm("GAME OVER. Restart?")) {
				document.location.reload();
			} else {
				document.location.reload();
			}
		}
	}

	if (rightPressed && paddleX < canvas.width - paddleWidth) {
		paddleX += 7;
	} else if (leftPressed && paddleX > 0) {
		paddleX -= 7;
	}

	x += dx;
	y += dy;
	requestAnimationFrame(draw);
}

draw();
