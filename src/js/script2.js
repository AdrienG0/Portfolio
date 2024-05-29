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
        const { recipeName, recipeIngredients, recipeInstructions } = Object.fromEntries(formData);
        const newRecipe = { name: recipeName, ingredients: recipeIngredients, instructions: recipeInstructions };

        recipes.push(newRecipe);
        localStorage.setItem("recipes", JSON.stringify(recipes));
        
        addRecipeToDOM(newRecipe, recipes.length - 1);
        recipeForm.reset();
        recipeForm.classList.add("form-submit-animation"); 

        
        setTimeout(() => {
          recipeForm.classList.remove("form-submit-animation");
        }, 500);
    });

    function addRecipeToDOM({ name, ingredients, instructions }, index) {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="recipe-content">
                <h3>${name}</h3>
                <p><strong>Ingrediënten:</strong> ${ingredients}</p>
                <p><strong>Instructies:</strong> ${instructions}</p>
            </div>
            <div class="delete-btn">
                <img src="/src/assets/bin.jpg" alt="Verwijder">
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
