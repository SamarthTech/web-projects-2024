const result = document.getElementById("result");
        const searchBtn = document.getElementById("search-btn");
        const userInput = document.getElementById("user-inp");
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

        // for function to show loading state
        function setLoading(isLoading) {
            if (isLoading) {
                result.innerHTML = '<div class="loading">Searching for your meal...</div>';
            }
        }

        // for  function to create meal display
        function createMealDisplay(myMeal, ingredients) {
            return `
                <img src="${myMeal.strMealThumb}" alt="${myMeal.strMeal}">
                <div class="details">
                    <h2>${myMeal.strMeal}</h2>
                    <h4>${myMeal.strArea}</h4>
                </div>
                <div id="ingredient-con">
                    <h3>Ingredients:</h3>
                    <ul>
                        ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                </div>
                <div id="recipe">
                    <button id="hide-recipe" aria-label="Close recipe">×</button>
                    <h3>Instructions:</h3>
                    <pre id="instructions">${myMeal.strInstructions}</pre>
                </div>
                <div class="recipe-buttons">
                    <button id="show-recipe">View Recipe</button>
                </div>
            `;
        }

        // for function to extract ingredients
        function extractIngredients(myMeal) {
            const ingredients = [];
            for (let i = 1; i <= 20; i++) {
                const ingredient = myMeal[`strIngredient${i}`];
                const measure = myMeal[`strMeasure${i}`];
                
                if (ingredient && ingredient.trim()) {
                    ingredients.push(`${measure?.trim() || ''} ${ingredient.trim()}`);
                }
            }
            return ingredients;
        }

        // for function to set up recipe visibility listeners
        function setupRecipeVisibility() {
            const recipe = document.getElementById("recipe");
            const hideRecipe = document.getElementById("hide-recipe");
            const showRecipe = document.getElementById("show-recipe");

            if (!recipe || !hideRecipe || !showRecipe) return;

            hideRecipe.addEventListener("click", () => {
                recipe.style.display = "none";
            });

            showRecipe.addEventListener("click", () => {
                recipe.style.display = "block";
            });
        }

        
        async function searchMeal(searchTerm) {
            try {
                if (!searchTerm.trim()) {
                    throw new Error("Please enter a meal name to search");
                }

                setLoading(true);
                const response = await fetch(API_URL + searchTerm);
                
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                
                if (!data.meals) {
                    throw new Error("No meal found with that name. Please try another search.");
                }

                const myMeal = data.meals[0];
                const ingredients = extractIngredients(myMeal);
                
                result.innerHTML = createMealDisplay(myMeal, ingredients);
                setupRecipeVisibility();

            } catch (error) {
                result.innerHTML = `<div class="error-message">${error.message}</div>`;
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        }

        
        searchBtn.addEventListener("click", () => {
            searchMeal(userInput.value);
        });

        userInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                searchMeal(userInput.value);
            }
        });