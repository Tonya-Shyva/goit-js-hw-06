const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulFoodRef = document.getElementById("ingredients");
const foodIngredients = ingredients.forEach((ingredient) => {
  let itemsEl = document.createElement("li");
  itemsEl.innerHTML = ingredient;
  itemsEl.classList.add("item");
  ulFoodRef.append(itemsEl);
});

console.log(ulFoodRef);
