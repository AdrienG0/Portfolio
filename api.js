document.addEventListener('DOMContentLoaded', () => {
    (async function fetchRecipes() {
        try {
            const response = await fetch('https://api.spoonacular.com/recipes/random?number=5&apiKey=YOUR_API_KEY');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayRecipes(data.recipes);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    })();
});

function displayRecipes(recipes) {
    const recipeList = document.getElementById('recipe-list');
    recipes.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.className = 'recipe-item';
        recipeItem.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}">
            <p>${recipe.instructions}</p>
        `;
        recipeList.appendChild(recipeItem);
    });
}
