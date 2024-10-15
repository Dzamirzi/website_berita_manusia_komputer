// Memuat file header.html ke dalam halaman
document.addEventListener('DOMContentLoaded', function() {
    // Memuat header.html
    fetch('header.html') // Mengambil konten header.html
        .then(response => response.text()) // Mengubah respons menjadi teks
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data; // Memasukkan header ke dalam placeholder
        })
        .catch(error => console.error('Error loading header:', error)); // Menangani error jika ada

    // Memuat footer.html
    fetch('footer.html') // Mengambil konten footer.html
        .then(response => response.text()) // Mengubah respons menjadi teks
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data; // Memasukkan footer ke dalam placeholder
            addFooterNavigation(); // Panggil fungsi untuk menambahkan navigasi setelah footer dimuat
        })
        .catch(error => console.error('Error loading footer:', error)); // Menangani error jika ada

    // Memeriksa status dark mode dari Local Storage dan menerapkan di semua halaman
    const darkModeStatus = localStorage.getItem('darkMode');
    if (darkModeStatus === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});

// Fungsi untuk menambahkan logika navigasi setelah footer dimuat
function addFooterNavigation() {
    const footerItems = document.querySelectorAll('.footer-item');

    // Menambahkan event listener pada setiap ikon footer
    footerItems.forEach(item => {
        item.addEventListener('click', function() {
            window.location.href = this.getAttribute('href'); // Navigasi ke halaman yang sesuai
        });
    });

    // Menandai halaman aktif berdasarkan URL saat ini
    const currentPath = window.location.pathname;
    footerItems.forEach(item => {
        if (item.getAttribute('href') === currentPath) {
            item.classList.add('active'); // Tambahkan class 'active' pada ikon halaman aktif
        }
    });
}

// Dark Mode Toggle (Opsional jika ada toggle di halaman)
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) { // Pastikan hanya dijalankan jika ada toggle dark mode
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled'); // Simpan status Dark Mode
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled'); // Nonaktifkan Dark Mode
        }
    });
}
