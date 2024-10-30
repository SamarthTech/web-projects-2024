const jsEditor = document.getElementById('jsEditor');
const submitButton = document.getElementById('submitButton');
const apiResponse = document.getElementById('apiResponse');
const feedback = document.getElementById('feedback');

// Example API endpoint for level 1 (can be replaced with a real API)
const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';

// Function to execute the player's fetch code
function runFetchCode() {
    const playerCode = jsEditor.value;

    try {
        // Create a new function from the player's input
        const fetchFunction = new Function(playerCode);

        // Run the player's function and fetch the API data
        fetchFunction();

    } catch (error) {
        feedback.textContent = 'There is an error in your JavaScript code. Please check and try again.';
        feedback.style.color = 'red';
    }
}

// Example fetch function for level 1
function fetchUserData() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            apiResponse.textContent = JSON.stringify(data, null, 2);
            feedback.textContent = 'Great! You successfully fetched the user data.';
            feedback.style.color = 'green';
        })
        .catch(error => {
            feedback.textContent = 'Error fetching data. Make sure your fetch request is correct.';
            feedback.style.color = 'red';
        });
}

// Pre-fill the code editor with a basic fetch template
jsEditor.value = `
fetch('${apiUrl}')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Your code to display the data goes here
    })
    .catch(error => console.error('Error:', error));
`;

// Event listener for the submit button
submitButton.addEventListener('click', runFetchCode);
