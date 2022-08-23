const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulFoodRef = document.getElementById('ingredients');
const foodIngredients = ingredients.forEach(ingredient => {
  let items = document.createElement('li');
  items.innerHTML = ingredient;
  items.classList.add('item');
  ulFoodRef.append(items);
});

console.log(ulFoodRef);