document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman

    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // Username dan password hard-coded (untuk pengujian)
    const defaultUsername = 'testuser';
    const defaultPassword = 'testpassword';

    // Validasi login
    if (enteredUsername === defaultUsername && enteredPassword === defaultPassword) {
        alert('Login successful!');
        // Redirect ke halaman home atau dashboard
        window.location.href = 'home_page.html';
    } else {
        alert('Incorrect username or password');
    }
});
