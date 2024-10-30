// Grab elements
const cssEditor = document.getElementById('cssEditor');
const applyButton = document.getElementById('applyButton');
const playerShape = document.getElementById('playerShape');
const feedback = document.getElementById('feedback');

// Target CSS animation properties
const targetAnimation = 'bounce 2s infinite ease-in-out';

// Apply player animation
function applyAnimation() {
    // Get player input
    const playerAnimation = cssEditor.value.trim();
    
    // Apply player animation to the shape
    playerShape.style.animation = playerAnimation;

    // Check if the player's animation matches the target animation
    if (playerAnimation === targetAnimation) {
        feedback.textContent = 'Perfect! You matched the target animation!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Not quite right. Keep trying to match the target!';
        feedback.style.color = 'red';
    }
}

// Add event listener to apply button
applyButton.addEventListener('click', applyAnimation);
