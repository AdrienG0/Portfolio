document.addEventListener("DOMContentLoaded", () => {
    const usernameSpan = document.getElementById("username");
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
        usernameSpan.textContent = storedUsername;
    }

    const recipeForm = document.getElementById("recipeForm");
    const recipeList = document.getElementById("recipeList");

    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    
});
