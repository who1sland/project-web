function submitForm() {
    const photosInput = document.getElementById("photos");

    // Cek apakah ada file yang diunggah
    if (photosInput.files.length === 0) {
        alert("Please fill in your data first");
    } else {
        alert("Your data has been submitted");
    }
}