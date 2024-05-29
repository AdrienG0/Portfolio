// /src/js/api.js

document.addEventListener('DOMContentLoaded', () => {
    const API_KEY = 'cf5e9945cf6644979d308c9a45f16d3e'; // Vervang dit door je echte API-sleutel
    const recipesContainer = document.getElementById('recipe-list');

    async function fetchRecipes() {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?number=5&apiKey=${API_KEY}`);
            const data = await response.json();
            displayRecipes(data.recipes);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
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
