const draggableElements = document.querySelectorAll('.draggable');
const dropzone = document.getElementById('dropzone');
const checkButton = document.getElementById('checkButton');
const feedback = document.getElementById('feedback');

let draggedElement = null;

// Add event listeners for drag events
draggableElements.forEach(element => {
    element.addEventListener('dragstart', () => {
        draggedElement = element;
        setTimeout(() => {
            element.style.display = 'none';
        }, 0);
    });

    element.addEventListener('dragend', () => {
        setTimeout(() => {
            element.style.display = 'block';
            draggedElement = null;
        }, 0);
    });
});

// Add event listeners for dropzone events
dropzone.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropzone.classList.add('hover');
});

dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('hover');
});

dropzone.addEventListener('drop', (event) => {
    dropzone.classList.remove('hover');
    if (draggedElement) {
        dropzone.appendChild(draggedElement);
    }
});

// Check the structure when the button is clicked
checkButton.addEventListener('click', () => {
    const childNodes = Array.from(dropzone.children).map(child => child.id);
    const correctStructure = ['header', 'section', 'article', 'aside', 'footer'];

    // Check if the order matches
    if (JSON.stringify(childNodes) === JSON.stringify(correctStructure)) {
        feedback.textContent = 'Correct! You created a valid HTML structure.';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Oops! The structure is incorrect. Try again.';
        feedback.style.color = 'red';
    }
});
