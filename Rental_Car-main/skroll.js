document.addEventListener("DOMContentLoaded", function () {
    // Ambil semua elemen car-card yang ada di halaman
    const carCards = document.querySelectorAll(".car-card");

    carCards.forEach((card) => {
        card.addEventListener("click", function () {
            // Tampilkan notifikasi saat mobil diklik
            const confirmBooking = confirm("Do you want to book a car now?\n\nBOOKING NOW");

            // Jika pengguna memilih "Iya," scroll ke bagian tenant
            if (confirmBooking) {
                const tenantSection = document.getElementById("Tenants");
                tenantSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});