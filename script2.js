document.addEventListener("DOMContentLoaded", () => {
    const usernameSpan = document.getElementById("username");
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
        usernameSpan.textContent = storedUsername;
    }

    const recipeForm = document.getElementById("recipeForm");
    const recipeList = document.getElementById("recipeList");

    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    recipes.forEach(recipe => addRecipeToDOM(recipe));

    recipeForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const formData = new FormData(recipeForm);
        const newRecipe = {
            name: formData.get("recipeName"),
            ingredients: formData.get("recipeIngredients"),
            instructions: formData.get("recipeInstructions")
        };

        recipes.push(newRecipe);
        localStorage.setItem("recipes", JSON.stringify(recipes));
        
        addRecipeToDOM(newRecipe);
        recipeForm.reset();
    });

    function addRecipeToDOM({ name, ingredients, instructions }) {
        const li = document.createElement("li");
        li.innerHTML = `
            <h3>${name}</h3>
            <p><strong>Ingrediënten:</strong> ${ingredients}</p>
            <p><strong>Instructies:</strong> ${instructions}</p>
        `;
        recipeList.appendChild(li);
    }
});
