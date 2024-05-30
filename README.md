# Receptenboek Webapplicatie

Deze wabapplicatie biedt gebruikers de mogelijkheid om recepten op te slaan en een todo-lijst bij te houden. Het project bevat ook een hamburgermenu voor navigatie binnen de applicatie en maakt ook gebruik van externe API's om recepten op te halen. 

## Functionaliteiten

- Elementen selecteren => Gebeurt op verschillende plaatsen in de JavaScript bestanden. Bijvoorbeeld:
    const registratieFormulier = document.getElementById("registratieFormulier");

- Elementen manipuleren => Gebeurt door tekst te veranderen, klassen toe te voegen of verwijderen en nieuwe elementen toevoegen. Bijvoorbeeld:
    usernameSpan.textContent = storedUsername;
    todoItem.appendChild(completeButton);
    todoItem.appendChild(verwijderButton);
    todoLijst.appendChild(todoItem);

- Event aan een element koppelen => Gebeurt door middel van 'addEventListener'. Bijvoorbeeld:
    hamburgerIcon.addEventListener("click", () => {
    menu.classList.toggle("show");
    });

- Formulier valideren => Gebeurt door ervoor te zorgen dat ze niet direct worden verzonden en dat de gegevens worden opgeslaan. Bijvoorbeeld:
    receptFormulier.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const formData = new FormData(receptFormulier);
    const { receptNaam, receptIngrediënten, receptInstructies } = Object.fromEntries(formData);
    // Verwerking van het formulier...
    });

- Gebruik van een constante => Worden gedefinieerd met het 'const' woord. Bijvoorbeeld:
    const API_KEY = 'cf5e9945cf6644979d308c9a45f16d3e';

- Gebruiken van template literals => Gebruikt voor het dynamisch generen van HTML-inhoud. Bijvoorbeeld:
    const li = document.createElement("li");
    li.innerHTML = `
        <div class="recipe-content">
            <h3>${name}</h3>
            <p><strong>Ingrediënten:</strong> ${ingredients}</p>
            <p><strong>Instructies:</strong> ${instructions}</p>
        </div>
        <div class="verwijder_btn">
            <img src="/src/assets/bin.jpg" alt="Verwijder">
        </div>
    `;

- Destructuring => Gebruikt om data uit objecten op te halen. Bijvoorbeeld:
    const { receptNaam, receptIngrediënten, receptInstructies } = Object.fromEntries(formData);

- Iteration over een array => Gebeurt met behulp van 'forEach. Bijvoorbeeld:
    recipes.forEach((recipe, index) => addRecipeToDOM(recipe, index));

- Arrow function => Gebeurt op verschillende plaatsen. Bijvoorbeeld:
    hamburgerIcon.addEventListener("click", () => {
    menu.classList.toggle("show");
    });

- Callback function => Gebeurt bij event listeners andere functies. Bijvoorbeeld:
    completeButton.addEventListener('click', () => {
    todoItem.classList.toggle('completed');
    });

- Consumer methods => Gebruikt voor het manipuleren van arrays, zoals: map, filter en reduce. Bijvoorbeeld:
    recipes.map(recipe => recipe.name);

- Async en Await => Gebeurt bij het ophalen van data via een API. Bijvoorbeeld:
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

- Self executing function => Gebruikt om code meteen uit te voeren na definitie. Bijvoorbeeld:
    (function() {
    document.addEventListener('DOMContentLoaded', () => {
        // Code hier
    });
    })();

- Fetch om data op te halen => Data ophalen via een externe API. Bijvoorbeeld:
    async function fetchRecipes() {
    try {
        const response1 = await fetch(`https://api.spoonacular.com/recipes/random?number=5&apiKey=${API_KEY}`);
        const data1 = await response1.json();
        // Meer code hier
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
    }   

- JSON manipuleren en weergeven => Wordt opgehaald en weergegeven op de pagina. Bijvoorbeeld:
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    recipes.forEach((recipe, index) => addRecipeToDOM(recipe, index));

- Basis CSS animatie => Gebruikt om iets visueel te benadrukken. Bijvoorbeeld:
    @keyframes scaleIn {
    0% {
        transform: scale(0.5);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
    }

    .form-submit-animation {
        animation: scaleIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

- Gebruiken van ene flexbox of CSS grid => Gebruikt voor de lay-out van verschillende elementen. Bijvoorbeeld:
    .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    }

    #recipe-list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

- Gebruik van LocalStorage => Gebruikt om data op te slaan. Bijvoorbeeld:
    localStorage.setItem("username", username);
    const storedUsername = localStorage.getItem("username");

    localStorage.setItem("recipes", JSON.stringify(recipes));
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];



## Projectstructuur

- src/assets/ : bevat alle afbeeldingen die door de aapplicatie worden gebruikt.

- src/css/ : Bevat alle CSS bestanden voor het stylen van de webpagina's
    - styles.css
    - hamburhermenu.css
    - stylesrecepten.css

- src/js/ : Bevat alle JavaScript bestanden voor de functionaliteiten van de webpagina's
    - hamburgermenu.js
    - todo.js
    - api.js
    - script.js
    - script2.js

- src/html/ : Bevat alle HTML bestanden
    - index.html
    - login.html
    - receptenboek.html
    - todo.html
    - api.html


## Gebruik

- Registreer of log in om uw naam of e-mail op te slaan in de LocalStorage.

- Voeg recepten toe via het formulier en bekijk ook de lijst van opgeslagen recepten.

- Gebruik de todo-lijst om taken toe te voegen en deze als 'done' te markeren of te verwijderen.

- Gebruikt het hamburgermenu voor navigatie doorheen de wepapplicatie.

## Doel project

Het doel van dit project is om verschillende webontwikkelingstechnieken en -concepten te demonstreren.
