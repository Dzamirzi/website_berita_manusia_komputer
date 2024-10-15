// Memuat dan menyimpan perubahan username
document.getElementById('update-username-btn').addEventListener('click', function() {
    const newUsername = document.getElementById('new-username').value;
    if (newUsername) {
        localStorage.setItem('username', newUsername);
        alert('Username updated successfully!');
    } else {
        alert('Please enter a valid username.');
    }
});

// Memuat dan menyimpan perubahan password
document.getElementById('update-password-btn').addEventListener('click', function() {
    const newPassword = document.getElementById('new-password').value;
    if (newPassword) {
        localStorage.setItem('password', newPassword);
        alert('Password updated successfully!');
    } else {
        alert('Please enter a valid password.');
    }
});

// Mengaktifkan atau menonaktifkan mode gelap
document.getElementById('dark-mode-toggle').addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled'); // Simpan status dark mode
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled'); // Nonaktifkan dark mode
    }
});

// Memeriksa status dark mode dari Local Storage saat halaman settings dimuat
document.addEventListener('DOMContentLoaded', function() {
    const darkModeStatus = localStorage.getItem('darkMode');
    if (darkModeStatus === 'enabled') {
        document.body.classList.add('dark-mode');
        document.getElementById('dark-mode-toggle').checked = true; // Toggle ON
    }
});


// Mengatur notifikasi (contoh sederhana)
document.getElementById('notifications-toggle').addEventListener('change', function() {
    if (this.checked) {
        alert('Notifications enabled.');
    } else {
        alert('Notifications disabled.');
    }
});

// Logout
document.getElementById('logout-btn').addEventListener('click', function() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    alert('You have logged out.');
    window.location.href = 'login.html'; // Redirect to login page
});
