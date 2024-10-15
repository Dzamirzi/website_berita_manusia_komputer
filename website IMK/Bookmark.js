// Data artikel untuk halaman Bookmark
const articles = [
    {
        id: 1,  // Tambahkan ID untuk setiap artikel
        title: "Pride on the Pitch: Celebrating Diversity in Football",
        description: "Fans wave the rainbow flag in support of LGBTQ+...",
        author: "John Smith",
        image: "current/lgbt.jpg"
    },
    {
        id: 2,  // Tambahkan ID untuk setiap artikel
        title: "Unity for the Future: Prabowo and Gibran Announce Partnership",
        description: "Prabowo Subianto, alongside Gibran...",
        author: "Annisa Putri",
        image: "current/prabowo.jpeg"
    },
    {
        id: 3,  // Tambahkan ID untuk setiap artikel
        title: "Majestic Scarlet Macaw Spotted in Amazon Rainforest",
        description: "A rare glimpse of a Scarlet Macaw in its...",
        author: "Maria Lopez",
        image: "current/manuk abang.jpg"
    },
    {
        id: 4,  // Tambahkan ID untuk setiap artikel
        title: "AC Milan Signs Star Striker Tammy Abraham",
        description: "AC Milan officially unveils Tammy Abraham....",
        author: "Luca Bianchi",
        image: "current/ac millan.jpeg"
    },
    {
        id: 5,  // Tambahkan ID untuk setiap artikel
        title: "Black Myth: Wukong – A New Era of Chinese Mythology in Gaming",
        description: "Black Myth: Wukong, a highly anticipated action RPG, brings the...",
        author: "Yao Chen",
        image: "current/wukong.png"
    },
    {
        id: 6,  // Tambahkan ID untuk setiap artikel
        title: "Kritik Terhadap Ideologi 'Woke' dalam Politik Kontemporer",
        description: "Penelitian terbaru menunjukkan bahwa ideologi 'woke'....",
        author: "Batman",
        image: "current/woke.jpeg"
    },
    {
        id: 7,  // Tambahkan ID untuk setiap artikel
        title: "Penurunan Rata-Rata Tarif Pengembalian Pekerjaan di AS",
        description: "Laporan terbaru menunjukkan tren penurunan signifikan pada...",
        author: "D. J. Trump",
        image: "current/grafik.png"
    }
];

// Konfigurasi pagination
const articlesPerPage = 5;
let currentPage = 1;
const totalPages = Math.ceil(articles.length / articlesPerPage);

// Menampilkan artikel di halaman sesuai pagination
function displayArticles(page) {
    const startIndex = (page - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const displayedArticles = articles.slice(startIndex, endIndex);

    const articlesContainer = document.getElementById('articles');
    articlesContainer.innerHTML = ''; // Hapus konten sebelumnya

    displayedArticles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.classList.add('article');

        // Tautan ke news_page.html dengan ID
        articleElement.innerHTML = `
            <a href="news_page.html?id=${article.id}">
                <img src="${article.image}" alt="${article.title}" class="article-image">
                <div class="article-content">
                    <h3 class="article-title">${article.title}</h3>
                    <p class="article-description">${article.description}</p>
                    <p class="article-author">by ${article.author}</p>
                </div>
            </a>
        `;

        articlesContainer.appendChild(articleElement);
    });

    document.getElementById('currentPage').textContent = currentPage;
}

// Mengatur tombol pagination
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayArticles(currentPage);
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        displayArticles(currentPage);
    }
});

// Tampilkan artikel saat halaman pertama dimuat
document.addEventListener('DOMContentLoaded', () => {
    displayArticles(currentPage);
});
