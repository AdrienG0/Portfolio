document.addEventListener("DOMContentLoaded", () => {
    const hamburgerIcon = document.getElementById("hamburgerIcon");
    const menu = document.getElementById("menu");

    hamburgerIcon.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
});
