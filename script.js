document.addEventListener("DOMContentLoaded", function() {

    const registrationForm = document.getElementById("registrationForm");
    registrationForm.addEventListener("submit", function(event) {

        if (!registrationForm.checkValidity()) {
            event.preventDefault();
            return false;
        }

        const usernameInput = document.getElementById("name");
        const username = usernameInput.value;
        localStorage.setItem("username", username);

        window.location.href = "receptenboek.html";
    });


    const loginForm = document.getElementById("loginForm"); 
    loginForm.addEventListener("submit", function(event) {

        if (!loginForm.checkValidity()) { 
            event.preventDefault();
            return false;
        }

        const emailInput = document.getElementById("email");
        const username = emailInput.value;
        localStorage.setItem("username", username);

        window.location.href = "receptenboek.html";
    });
});