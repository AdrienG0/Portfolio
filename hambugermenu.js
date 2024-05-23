document.addEventListener("DOMContentLoaded", () => {
    const usernameSpan = document.getElementById("username");
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
        usernameSpan.textContent = storedUsername;
    }

    const hamburgerIcon = document.getElementById("hamburgerIcon");
    const menu = document.getElementById("menu");

    hamburgerIcon.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
});
