

(function() {
    document.addEventListener('DOMContentLoaded', () => {
        const API_KEY = 'cf5e9945cf6644979d308c9a45f16d3e'; // Vervang dit door je echte API-sleutel
        const recipesContainer = document.getElementById('recipe-list');
    
        async function fetchRecipes() {
            try {
                const response1 = await fetch(`https://api.spoonacular.com/recipes/random?number=5&apiKey=${API_KEY}`);
                const data1 = await response1.json();
                
                const response2 = await fetch(`https://api.spoonacular.com/recipes/random?number=5&apiKey=${API_KEY}`);
                const data2 = await response2.json();

                const allRecipes = combineRecipes(...[data1.recipes, data2.recipes]);
                displayRecipes(allRecipes);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        }

        function combineRecipes(...recipeArrays) {
            return recipeArrays.flat();
        }

        function displayRecipes(recipes) {
            recipesContainer.innerHTML = '';
            recipes.forEach(recipe => {
                const recipeElement = document.createElement('div');
                recipeElement.classList.add('recipe');

                recipeElement.innerHTML = `
                    <h3>${recipe.title}</h3>
                    <img src="${recipe.image}" alt="${recipe.title}">
                    <p>${recipe.summary}</p>
                    <a href="${recipe.sourceUrl}" target="_blank">Bekijk recept</a>
                `;

                recipesContainer.appendChild(recipeElement);
            });
        }

        fetchRecipes();
    });
})();

