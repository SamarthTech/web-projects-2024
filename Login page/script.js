function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');

    if (username === '' || password === '') {
        errorElement.innerText = 'Both fields are required.';
        return false;
    }

   

    alert('Login successful!');
    return true;
}
