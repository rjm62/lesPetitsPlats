import { createRecipeCards } from "./createRecipeCards.js";
import { recipesWithoutAccent } from "./createRecipesWithoutAccent.js";
export function inputSearchBar(originList, list){

   // ouaissssssssss ça marche
   // Enfin je pensais..........

    let array =[];
    var beforeFirstLetter =1;
    const searchBarInput = document.querySelector(".searchBar input");
    searchBarInput.addEventListener("keyup", function(event) {
        let result= event.target;
        console.log(result.value);

        //----- VERIFICATION SI LA PERSONNE N'A PAS COMMENCE PAR TAPER UN ESPACE-------------
        if(result.value.charCodeAt(0)==32 && beforeFirstLetter===1){ // la personne a entré un espace
            result.value="";   // on remets le champ à 0.
        }
        else {
            beforeFirstLetter=0; //on à bien rentré un caractère au début(verification devient inactif)
        }

        if (result.value.charCodeAt(0)==32) {   //la personne a effacé sa demande, on remet la suppression des espaces actif
            beforeFirstLetter=1;  
        }
        var stringreceived = result.value.toLowerCase().trim();
        
        const accentLetterArray =  ['à','á','â','é','è','ê','ë','ì','í','ï','î','ò','ó','ô','ù','ú','û','ü','ç'];
        const withoutletterArray = ['a','a','a','e','e','e','e','i','i','i','i','o','o','o','u','u','u','u','c'];
       
      
        for(let k =0; k<stringreceived.length; k++){
            for(let l=0; l<accentLetterArray.length; l++) {
                if (stringreceived.charAt(k)== accentLetterArray[l]) {
                    var stringreceived = stringreceived.replace(stringreceived[k], withoutletterArray[l]);
                    console.log("ok");
                    console.log(stringreceived);
                }
            }
        }


        if(result.value.length>2) {
            let array1 = list.filter(recipe => recipe.name.toLowerCase().includes(" "+stringreceived));
                // ||recipe.description.toLowerCase().includes(" "+stringreceived));
                let reduceArrayFirst = list.filter(val =>!array1.includes(val));
            let array2 = reduceArrayFirst.filter(recipe => recipe.description.toLowerCase().includes(" "+stringreceived))
            console.log(list);
            console.log(reduceArrayFirst);
            console.log(array2);
            
            
            let reduceArraySecond = reduceArrayFirst.filter(val => !array2.includes(val));
            
            console.log(reduceArraySecond);
            
            array = array1.concat(array2);

            console.log(array);
            reduceArraySecond.forEach(element => {  
                for(let i = 0; i<element.ingredients.length; i++) {
                    const ingredient = element.ingredients[i].ingredient;
                    if(ingredient.toLowerCase().includes(" "+stringreceived) && !array.includes(element)) {
                        array.push(element);
                        console.log(array);
                    }
                }
            });  
            var newList=[];
            for(let f =0; f<originList.length; f++) {
                for(let d=0; d<array.length; d++) {
                    if (originList[f].id == array[d].id) {
                        newList.push(originList[f]);
                        console.log(originList[f]);
                        console.log(newList);
                    }
                }
            }   
            createRecipeCards(newList);
        } else {
            createRecipeCards(originList);
        }
    });   
}

/*
export function inputSearchBar(recipesArray){
    var essai = [];
    let previousArryLength;
//const searchBarInput = document.querySelector(".searchBar input");
    searchBarInput.addEventListener("keyup", function(event) {
        let result= event.target;
        //console.log(result);
        var stringreceived = result.value.toLowerCase();
        console.log(stringreceived);
        if (stringreceived.length>2 || previousArryLength-1 ==stringreceived.length){
            previousArryLength = stringreceived.length;
            var temporaryArrayInput = new Array;
            var tintin=0;
            for(let s=0; s<recipesArray.length; s++) {  
                tintin=0;  
                if(recipesArray[s].name.toLowerCase().includes(stringreceived) 
                ||recipesArray[s].description.toLowerCase().includes(stringreceived)) {
                temporaryArrayInput.push(recipesArray[s]);
                tintin=1;
                console.log(temporaryArrayInput);
                }
                else if(tintin==0) {
                    for (let u=0; u<recipesArray[s].ingredients.length; u++) {
                        let picsou = recipesArray[s].ingredients[u].ingredient;
                        if(picsou.toLowerCase().includes(stringreceived)) {
                            console.log((recipesArray[s].ingredients[u].ingredient));
                            temporaryArrayInput.push(recipesArray[s]);
                            console.log(temporaryArrayInput);
                        }
                    }
                }
            }
            console.log(temporaryArrayInput);           
        } 
        console.log("333333"+temporaryArrayInput); 
        essai = temporaryArrayInput;

    });
    console.log("1"+essai); 
    return (essai);
}
// console.log(roro); 

*/




