/* Exercise 2 (this is a bit tougher)
See the array of recipes defined below. Each recipe is an object which has a name and ingredients properties.
Write a function which takes a list of recipe names as an argument, and returns the shopping list of ingredients you will need (don't worry about duplicate values for now).
A call to the function will look like this: makeShoppingList(['homemade pasta', 'pasta sauce']);
var recipes = [
    {
        name: 'roast chicken',
        ingredients: ['chicken', 'garlic', 'lemon', 'butter', 'pepper']
    },
    {
        name: 'pasta sauce',
        ingredients: ['olive oil', 'tomatoes', 'garlic', 'onion', 'chilli flakes']
    },
    {
        name: 'homemade pasta',
        ingredients: ['flour', 'eggs', 'olive oil', 'salt']
    }
];
A couple of hints:
find out if an array contains a value using includes
	[1, 2, 3].includes(2) // is true
	[1, 2, 3].includes(4) // is false
add all the values from one array into another array using …
	firstArray.push(…secondArray) // all the values from secondArray will be added to firstArray */

var recipes = [{
        name: "roast chicken",
        ingredients: ["chicken", "garlic", "lemon", "butter", "pepper"],
    },
    {
        name: "pasta sauce",
        ingredients: ["olive oil", "tomatoes", "garlic", "onion", "chilli flakes"],
    },
    {
        name: "homemade pasta",
        ingredients: ["flour", "eggs", "olive oil", "salt"],
    },
];

function makeShoppingList(list) {
    var buyIngredients = [];
    for (var j = 0; j < list.length; j++) {
        for (var i = 0; i < recipes.length; i++) {
            if (list[j].includes(recipes[i].name)) {
                buyIngredients.push(...recipes[i].ingredients);
            }
        }
    }
    var singleIngredientList = [...new Set(buyIngredients)];
    return singleIngredientList;
}

makeShoppingList(["homemade pasta", "pasta sauce"]);