document.addEventListener("DOMContentLoaded", function() {
    const hamburgerIcon = document.getElementById("hamburgerIcon");
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closeBtn");

    hamburgerIcon.addEventListener("click", function() {
        popup.style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
    });
});
