  // Fungsi untuk memantau posisi scroll
  window.onscroll = function() {
    const backToTopButton = document.getElementById("backToTop");

    // Cek apakah pengguna sudah scroll ke bawah lebih dari 100px
    if (window.scrollY > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};