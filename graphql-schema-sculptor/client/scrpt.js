// client/script.js
const submitSchemaButton = document.getElementById('submitSchema');
const submitQueryButton = document.getElementById('submitQuery');
const outputDiv = document.getElementById('output');

submitSchemaButton.addEventListener('click', async () => {
    const schema = document.getElementById('schemaEditor').value.trim();
    // Send the schema to the server for validation (this would typically involve a more complex setup)
    outputDiv.textContent = `Schema submitted: ${schema}`;
});

submitQueryButton.addEventListener('click', async () => {
    const query = document.getElementById('queryEditor').value.trim();
    const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    });

    const json = await response.json();
    outputDiv.textContent = JSON.stringify(json, null, 2);
});
