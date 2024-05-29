document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");
    if (registrationForm) {
        registrationForm.addEventListener("submit", function() {
            const username = document.getElementById("name").value;
            localStorage.setItem("username", username);
        });
    }

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function() {
            const email = document.getElementById("email").value;
            localStorage.setItem("username", email);
        });
    }
});
