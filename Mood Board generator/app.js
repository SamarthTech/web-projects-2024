// Variables to hold state
let moodBoard = document.getElementById('mood-board');
let selectedElement = null;

// Add Image
document.getElementById('add-image').addEventListener('click', () => {
    const fileInput = document.getElementById('image-upload');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.classList.add('image');
            img.style.top = '50px';
            img.style.left = '50px';
            img.draggable = true;
            moodBoard.appendChild(img);

            // Make draggable
            makeElementDraggable(img);
        };
        reader.readAsDataURL(file);
    }
});

// Add Text
document.getElementById('add-text').addEventListener('click', () => {
    const text = document.getElementById('text-input').value;
    const fontSize = document.getElementById('font-size').value;
    const fontColor = document.getElementById('font-color').value;

    const textElement = document.createElement('div');
    textElement.innerText = text;
    textElement.classList.add('text-element');
    textElement.style.color = fontColor;
    textElement.style.fontSize = fontSize + 'px';
    textElement.style.top = '100px';
    textElement.style.left = '100px';
    textElement.draggable = true;
    moodBoard.appendChild(textElement);

    makeElementDraggable(textElement);
});

// Background Color
document.getElementById('background-color').addEventListener('input', (e) => {
    moodBoard.style.backgroundColor = e.target.value;
});

// Drag and Drop Functionality
function makeElementDraggable(el) {
    el.addEventListener('dragstart', (e) => {
        selectedElement = el;
    });

    moodBoard.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    moodBoard.addEventListener('drop', (e) => {
        const x = e.clientX - moodBoard.offsetLeft - selectedElement.offsetWidth / 2;
        const y = e.clientY - moodBoard.offsetTop - selectedElement.offsetHeight / 2;

        selectedElement.style.left = `${x}px`;
        selectedElement.style.top = `${y}px`;
    });
}

// Save Board
document.getElementById('save-board').addEventListener('click', () => {
    const boardData = moodBoard.innerHTML;
    localStorage.setItem('moodBoardData', boardData);
    alert('Mood board saved!');
});

// Load Board
document.getElementById('load-board').addEventListener('click', () => {
    const boardData = localStorage.getItem('moodBoardData');
    if (boardData) {
        moodBoard.innerHTML = boardData;
        const elements = moodBoard.children;
        for (let i = 0; i < elements.length; i++) {
            makeElementDraggable(elements[i]);
        }
    }
});

// Share Board
document.getElementById('share-board').addEventListener('click', () => {
    const boardContent = moodBoard.innerHTML;
    const blob = new Blob([boardContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const shareLink = document.createElement('a');
    shareLink.href = url;
    shareLink.download = 'moodboard.html';
    shareLink.click();
});
