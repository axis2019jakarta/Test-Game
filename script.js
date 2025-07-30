document.addEventListener('DOMContentLoaded', function() {

    console.log("Nabila Tracking Official - Halaman dimuat.");
    
    // --- Fungsionalitas Gelembung WhatsApp ---
    const whatsappButton = document.getElementById('whatsapp-btn');
    const adminWhatsAppNumber = '6285810526151'; 

    if (whatsappButton) {
        whatsappButton.addEventListener('click', function() {
            const whatsappUrl = `https://wa.me/${adminWhatsAppNumber}?text=${encodeURIComponent('Halo Admin Nabila Tracking Official, saya butuh bantuan.')}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    // --- FUNGSI MODAL DEPOSIT (BARU) ---
    const depositModal = document.getElementById('deposit-modal');
    const openModalBtn = document.getElementById('deposit-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');

    function openModal() {
        if (depositModal) depositModal.classList.remove('hidden');
    }

    function closeModal() {
        if (depositModal) depositModal.classList.add('hidden');
    }

    // Event listener untuk membuka modal
    if (openModalBtn) {
        openModalBtn.addEventListener('click', openModal);
    }
    
    // Event listener untuk menutup modal
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Menutup modal jika user klik di luar area konten
    if (depositModal) {
        depositModal.addEventListener('click', function(event) {
            if (event.target === depositModal) {
                closeModal();
            }
        });
    }

    // --- Placeholder untuk Fungsi Developer di Masa Depan ---
    function fetchPortfolioData() {
        console.log("Fungsi fetchPortfolioData() dipanggil. Menunggu implementasi backend.");
    }

    function fetchWatchlistData() {
        console.log("Fungsi fetchWatchlistData() dipanggil. Menunggu implementasi API.");
    }

    // Memanggil fungsi placeholder
    fetchPortfolioData();
    fetchWatchlistData();

});
