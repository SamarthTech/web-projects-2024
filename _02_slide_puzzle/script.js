const rows = 3;
const columns = 3;

var currTile;
var otherTile; // initially blank tile

var turns = 0;

const images = ["1", "2", "3", "4", "5", "6", "7", "8", "blank"];
var imgOrder = [];

for (let i = 0; i < images.length; i++) {
	let random = Math.floor(Math.random() * (images.length)) + 0;

	let j = 0;
	for (; j < imgOrder.length; j++) {
		if(imgOrder[j] == images[random]) {
			j = -1;
			break;
		}
	}

	if (j == -1) { i--; }
	else { imgOrder.push(images[random]); }
}

window.onload = function() {
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < columns; c++) {

			// <img id="0-0" src="1.jpg">
			let tile = document.createElement("img");
			tile.id = r.toString() + "-" + c.toString();
			tile.src = imgOrder.shift() + ".jpg";

			// DRAG FUNCTIONALITY
			tile.addEventListener("dragstart", dragStart);  //click an image to drag
			tile.addEventListener("dragover", dragOver);    //moving image around while clicked
			tile.addEventListener("dragenter", dragEnter);  //dragging image onto another one
			tile.addEventListener("dragleave", dragLeave);  //dragged image leaving anohter image
			tile.addEventListener("drop", dragDrop);        //drag an image over another image, drop the image
			tile.addEventListener("dragend", dragEnd);      //after drag drop, swap the two tiles

			document.getElementById("board").append(tile);

		}
	}
}

function dragStart() { currTile = this; }
function dragDrop() { otherTile = this; }

function dragEnd() {
	if (!otherTile.src.includes("blank.jpg")) {
		return;
	}

	let currCoords = currTile.id.split("-"); // ex) "0-0" -> ["0", "0"]
	let r = parseInt(currCoords[0]);
	let c = parseInt(currCoords[1]);

	let otherCoords = otherTile.id.split("-");
	let r2 = parseInt(otherCoords[0]);
	let c2 = parseInt(otherCoords[1]);

	let moveLeft = r == r2 && c2 == c-1;
	let moveRight = r == r2 && c2 == c+1;
	let moveUp = c == c2 && r2 == r-1;
	let moveDown = c == c2 && r2 == r+1;

	let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

	if (isAdjacent) {
		let currImg = currTile.src;
		let otherImg = otherTile.src;

		currTile.src = otherImg;
		otherTile.src = currImg;

		turns += 1;
		document.getElementById("turns").innerText = turns;
	}


}

function dragOver(e) { e.preventDefault(); }
function dragEnter(e) { e.preventDefault(); }
function dragLeave() {}
