document.addEventListener('DOMContentLoaded', function() {
    // Ambil ID dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const newsId = urlParams.get('id'); // Mendapatkan ID berita dari URL

    console.log(`ID berita yang diterima: ${newsId}`); // Tambahkan log untuk memeriksa ID dari URL

    // Ambil elemen berita yang sesuai dengan ID dengan awalan 'news-'
    const selectedNews = document.getElementById(`news-${newsId}`);

    if (selectedNews) {
        console.log(`Elemen ditemukan:`, selectedNews); // Log elemen berita yang ditemukan

        // Isi judul berita dari elemen tersembunyi
        document.getElementById('news-title').textContent = selectedNews.dataset.title;
        
        // Isi penulis berita dan tanggal
        document.getElementById('news-author').textContent = `Oleh ${selectedNews.dataset.author} | ${selectedNews.dataset.date}`;

        // Ambil gambar berita
        const image = selectedNews.querySelector('img').src;
        console.log(`Gambar yang ditemukan: ${image}`); // Log gambar yang ditemukan
        
        // Isi gambar berita
        document.getElementById('news-image').src = image;

        // Ambil semua paragraf deskripsi berita dari elemen tersembunyi
        const content = selectedNews.querySelectorAll('p');
        let contentHTML = '';
        content.forEach(paragraph => {
            contentHTML += `<p>${paragraph.innerHTML}</p>`;
        });

        // Isi deskripsi berita
        document.getElementById('news-content').innerHTML = contentHTML;

    } else {
        // Jika ID berita tidak ditemukan
        console.log(`Berita dengan ID ${newsId} tidak ditemukan`);
        document.getElementById('news-content').textContent = "Berita tidak ditemukan.";
    }
});
