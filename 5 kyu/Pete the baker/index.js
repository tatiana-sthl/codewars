/*
PSEUDOCODE
1. Write a function which takes the recipe and the available ingredients
2. Return the maximum number of cakes Pete can bake
3. There are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200)
4. Ingredients that are not present in the objects, can be considered as 0.
*/

function cakes(recipe, available) {
  let maxCakes;
  for (let ingredient in recipe) {
    if (available[ingredient]) {
      const possibleCakes = Math.floor(
        available[ingredient] / recipe[ingredient] || 0
      );
      if (!maxCakes || possibleCakes < maxCakes) {
        maxCakes = possibleCakes;
      }
    } else {
      return 0;
    }
  }
  return maxCakes;
}

module.exports = cakes;
