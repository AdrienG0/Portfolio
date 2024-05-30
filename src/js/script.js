document.addEventListener("DOMContentLoaded", function() {
    const registratieFormulier = document.getElementById("registratieFormulier");
    if (registratieFormulier) {
        registratieFormulier.addEventListener("submit", function() {
            const username = document.getElementById("name").value;
            localStorage.setItem("username", username);
        });
    }

    const loginFormulier = document.getElementById("loginFormulier");
    if (loginFormulier) {
        loginFormulier.addEventListener("submit", function() {
            const email = document.getElementById("email").value;
            localStorage.setItem("username", email);
        });
    }
});
