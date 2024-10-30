const applyButton = document.getElementById('applyButton');
const clearButton = document.getElementById('clearButton');
const workletEditor = document.getElementById('workletEditor');
const effectBox = document.getElementById('effectBox');
const feedback = document.getElementById('feedback');

// Function to register and apply the paint worklet
function applyWorklet() {
    const workletCode = workletEditor.value.trim();

    if (!workletCode) {
        feedback.textContent = 'Please enter your paint worklet code!';
        feedback.style.color = 'red';
        return;
    }

    // Create a new paint worklet
    if (CSS.paintWorklet) {
        CSS.paintWorklet.addModule('paint.js')
            .then(() => {
                feedback.textContent = 'Paint worklet applied successfully!';
                feedback.style.color = 'green';
                // Apply the worklet
                effectBox.style.backgroundImage = 'paint(workletName, 0, 0, 300, 300)'; // Adjust as needed
            })
            .catch(err => {
                feedback.textContent = 'Error applying worklet: ' + err.message;
                feedback.style.color = 'red';
            });
    } else {
        feedback.textContent = 'Your browser does not support CSS Houdini!';
        feedback.style.color = 'red';
    }
}

// Function to clear the effect
function clearEffect() {
    effectBox.style.backgroundImage = 'none';
    workletEditor.value = '';
    feedback.textContent = '';
}

// Add event listeners to buttons
applyButton.addEventListener('click', applyWorklet);
clearButton.addEventListener('click', clearEffect);
