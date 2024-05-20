document.addEventListener("DOMContentLoaded", function() {
    const usernameSpan = document.getElementById("username");
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
        usernameSpan.textContent = storedUsername;
    }
});
