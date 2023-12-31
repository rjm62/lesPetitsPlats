export function createRecipeCards(recipes) {
    const containerRecipes = document.querySelector(".containerRecipes"); // intégration des enfants dans l'élément parent
    containerRecipes.innerHTML="";
    var ingredientsAr = new Array();
    var applianceAr = new Array();
    var ustensilsAr = new Array();
    var applianceWithoutDoublons = new Array();
    var fifi = [];
    for(let i=0; i<recipes.length; i++) {
        const recipeCard = document.createElement("div");        // conteneur général de la fiche
        const data = recipes[i];
        recipeCard.className = "recipeCard";
        recipeCard.style.display = "flex";
        recipeCard.style.flexDirection = "column";
        recipeCard.style.width = "100%";
        recipeCard.style.alignItems = "start";

        const img = document.createElement("img");         // image + titre
        img.src = "./assets/Photos des plats/"+data.image;
        img.style.width = "100%";
        const figcaption = document.createElement("figcaption");
        figcaption.innerText = data.name;

        const timeContainer = document.createElement("div");
        timeContainer.className = "timeContainer";
        const time = document.createElement("p");
        time.className = "time";
        time.innerText = data.time+"min";
        timeContainer.appendChild(time);

        const recipeDescription = document.createElement("div");   // conteneur description
        recipeDescription.className = "recipeDescription";
        const descriptionName = document.createElement("h5");
        descriptionName.className = "descriptionName";
        descriptionName.innerText = "RECETTE";
        const descriptionText = document.createElement("p");
        descriptionText.className = "descriptionText";
        descriptionText.innerText = data.description;
        recipeDescription.appendChild(descriptionName);
        recipeDescription.appendChild(descriptionText);

        const ingredientsTitle = document.createElement("h5");       
        ingredientsTitle.className = "ingredientsTitle";
        ingredientsTitle.innerText = "INGREDIENTS";

        const ingredientsContainer = document.createElement("div");  // conteneur ingrédients et quantités
        ingredientsContainer.className = "ingredientsContainer";
        
        for(let j=0; j<data.ingredients.length; j++) {
            const ingredientAndQuantityContainer = document.createElement("div");
            ingredientAndQuantityContainer.className = "ingredientAndQuantityContainer";
            const ingredientName = document.createElement("p");
            ingredientName.className = "ingredientName";
            ingredientName.innerText = data.ingredients[j].ingredient;
            ingredientsAr.push(data.ingredients[j].ingredient);
            const ingredientQuantity = document.createElement("div");
            ingredientQuantity.className = "ingredientQuantity";
            const quantity = document.createElement("p"); 
            if(data.ingredients[j].quantity!= undefined) {
                quantity.innerText = data.ingredients[j].quantity;
            }
            const unit = document.createElement("p");
            unit.className ="unit";
            if(data.ingredients[j].unit!= undefined) {
                unit.innerText = data.ingredients[j].unit;
            }
        
            ingredientAndQuantityContainer.appendChild(ingredientName);
            ingredientAndQuantityContainer.appendChild(ingredientQuantity);
            ingredientQuantity.appendChild(quantity);
            ingredientQuantity.appendChild(unit);
            ingredientsContainer.appendChild(ingredientAndQuantityContainer);
        }

        for(let j=0; j<data.ustensils.length; j++) {
            ustensilsAr.push(data.ustensils[j]);
        }

        applianceAr.push(data.appliance);
        containerRecipes.appendChild(recipeCard);
        

        recipeCard.appendChild(img);
        recipeCard.appendChild(figcaption);
        recipeCard.appendChild(timeContainer);
        recipeCard.appendChild(recipeDescription);
        recipeCard.appendChild(ingredientsTitle);
        recipeCard.appendChild(ingredientsContainer);
        
              
        fifi.push(recipeCard);
        
    }
    // affichage du nombre de recettes selectionnées par input
    let recipesNumber = document.querySelector("main nav h3 #recipesNumber "); 
    
    let nb = recipes.length>1 ? "s" :"";
    recipesNumber.textContent = recipes.length+" "+"recette"+nb;
   
    // vérification si au moins une recette est sélectionnée. Sinon on affiche un message
    var message = document.querySelector(".message");
    if(recipes.length==0) { 
        let inputValue = document.querySelector(".searchBar input");
        let value= inputValue.value.toUpperCase();
        let openMessageDisplay = document.querySelector(".message");
        openMessageDisplay.style.display = "flex";
        let input=document.querySelector(".message #input");
        input.textContent = value;
        message.style.display= "flex";
    }   
    else {
         message.style.display = "none";
    }

    return [ingredientsAr, applianceAr, ustensilsAr];
}
