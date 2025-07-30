// Menunggu seluruh konten halaman dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {

    // --- DATA SAHAM & BERITA (PURWARUPA) ---
    // Di aplikasi nyata, data ini akan diambil dari server (Nhost)
    const fakeStockData = [
        { code: 'BBCA', price: '9.850', change: 1.25, status: 'positive' },
        { code: 'TLKM', price: '3.800', change: -0.52, status: 'negative' },
        { code: 'GOTO', price: '88', change: 0.00, status: 'stable' },
        { code: 'ASII', price: '5.200', change: 2.45, status: 'positive' },
        { code: 'BREN', price: '7.500', change: -1.50, status: 'negative' }
    ];

    const fakeNewsData = [
        { title: "IHSG Dibuka Menguat di Awal Sesi Perdagangan", excerpt: "Sentimen positif dari pasar global mendorong bursa domestik..." },
        { title: "Sektor Teknologi Menjadi Penggerak Utama Pasar", excerpt: "Saham-saham berbasis teknologi mencatatkan kenaikan signifikan..." },
        { title: "Harga Komoditas Energi Kembali Melonjak Tajam", excerpt: "Kenaikan permintaan global menjadi pemicu utama..." }
    ];

    // --- FUNGSI UNTUK MENAMPILKAN DATA ---
    function renderWatchlist() {
        const container = document.getElementById('watchlist-container');
        if (!container) return; // Hentikan jika elemen tidak ditemukan
        
        container.innerHTML = ''; // Kosongkan dulu listnya
        fakeStockData.forEach(stock => {
            const changeText = stock.status === 'stable' ? '0.00%' : `${stock.change > 0 ? '+' : ''}${stock.change.toFixed(2)}%`;
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span class="stock-code">${stock.code}</span>
                <span class="stock-price">Rp ${stock.price}</span>
                <span class="stock-change ${stock.status}">${changeText}</span>
            `;
            container.appendChild(listItem);
        });
    }

    function renderNews() {
        const container = document.getElementById('news-container');
        if (!container) return; // Hentikan jika elemen tidak ditemukan

        container.innerHTML = ''; // Kosongkan dulu
        fakeNewsData.forEach(news => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');
            newsItem.innerHTML = `
                <h4>${news.title}</h4>
                <p>${news.excerpt}</p>
            `;
            container.appendChild(newsItem);
        });
    }

    // --- FUNGSI MODAL & INTERAKSI TOMBOL ---
    const depositModal = document.getElementById('deposit-modal');
    const openModalBtn = document.getElementById('deposit-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const whatsappButton = document.getElementById('whatsapp-btn');
    const adminWhatsAppNumber = '6285810526151';

    function openModal() {
        if (depositModal) depositModal.classList.remove('hidden');
    }

    function closeModal() {
        if (depositModal) depositModal.classList.add('hidden');
    }

    if (openModalBtn) openModalBtn.addEventListener('click', openModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (depositModal) depositModal.addEventListener('click', (e) => {
        if (e.target === depositModal) closeModal();
    });

    if (whatsappButton) {
        whatsappButton.addEventListener('click', () => {
            const whatsappUrl = `https://wa.me/${adminWhatsAppNumber}?text=${encodeURIComponent('Halo Admin Nabila Tracking Official, saya butuh bantuan.')}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    // --- MEMANGGIL SEMUA FUNGSI SAAT HALAMAN DIBUKA ---
    renderWatchlist();
    renderNews();
    
    console.log("Nabila Tracking Official v2 - Halaman dimuat dengan data dinamis.");
});
