document.addEventListener("DOMContentLoaded", () => {
    const usernameSpan = document.getElementById("username");
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
        usernameSpan.textContent = storedUsername;
    }

    const recipeForm = document.getElementById("recipeForm");
    const recipeList = document.getElementById("recipeList");

    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    recipes.forEach((recipe, index) => addRecipeToDOM(recipe, index));

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
        
        addRecipeToDOM(newRecipe, recipes.length - 1);
        recipeForm.reset();
    });

    function addRecipeToDOM(recipe, index) {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="recipe-content">
                <h3>${recipe.name}</h3>
                <p><strong>Ingrediënten:</strong> ${recipe.ingredients}</p>
                <p><strong>Instructies:</strong> ${recipe.instructions}</p>
            </div>
            <div class="delete-btn">
                <img src="assets/bin.jpg" alt="Verwijder">
            </div>
        `;

        li.querySelector('.delete-btn').addEventListener('click', () => {
            deleteRecipe(index);
        });

        recipeList.appendChild(li);
    }

    function deleteRecipe(index) {
        recipes.splice(index, 1);
        localStorage.setItem("recipes", JSON.stringify(recipes));
        recipeList.innerHTML = '';
        recipes.forEach((recipe, index) => addRecipeToDOM(recipe, index));
    }
});
