document.addEventListener("DOMContentLoaded", function() {

    const registrationForm = document.getElementById("registrationForm");
    registrationForm.addEventListener("submit", function(event) {

        if (!registrationForm.checkValidity()) {
            event.preventDefault();
            return false;
        }

        window.location.href = "receptenboek.html";
    });


    const loginForm = document.getElementById("loginForm"); // Verander de id naar "loginForm"
    loginForm.addEventListener("submit", function(event) {

        if (!loginForm.checkValidity()) { // Verander naar "loginForm.checkValidity()"
            event.preventDefault();
            return false;
        }
        window.location.href = "receptenboek.html";
    });
});
