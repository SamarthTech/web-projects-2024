const cssEditor = document.getElementById('cssEditor');
const submitButton = document.getElementById('submitButton');
const resetButton = document.getElementById('resetButton');
const userLayout = document.getElementById('userLayout');
const feedback = document.getElementById('feedback');

// Function to update the user layout with custom CSS
function updateLayout() {
    const playerCSS = cssEditor.value;

    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(playerCSS));
    document.head.appendChild(style);
}

// Function to check for basic responsive structure
function checkResponsive() {
    const requiredCSS = `
        @media (max-width: 768px) {
            .nav, .aside { display: none; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
            .nav { width: 25%; }
            .main { width: 70%; }
        }
        @media (min-width: 1025px) {
            .nav { width: 20%; }
            .main { width: 60%; }
            .aside { width: 20%; }
        }
    `;

    // Simple feedback logic to check if CSS contains media queries
    if (cssEditor.value.includes('@media')) {
        feedback.textContent = 'Good job! Check how your layout looks on different screen sizes.';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Your CSS needs media queries for responsiveness. Try again!';
        feedback.style.color = 'red';
    }
}

// Event listener for the submit button
submitButton.addEventListener('click', function() {
    updateLayout();
    checkResponsive();
});

// Event listener for the reset button
resetButton.addEventListener('click', function() {
    cssEditor.value = '';
    feedback.textContent = '';
    const styleTags = document.querySelectorAll('style');
    styleTags.forEach(tag => tag.remove());
});
