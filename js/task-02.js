const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// -----  варіант зі старим методом createDocumentFragment----

// const ulFoodRef = document.querySelector("#ingredients");
// const fragmentLi = document.createDocumentFragment();
// ingredients.forEach((ingredient) => {
//   let item = document.createElement("li");
//   item.textContent = ingredient;
//   item.classList.add("item");
//   fragmentLi.append(item);
// });
// ulFoodRef.append(fragmentLi);
// console.log(ulFoodRef);

// -------    Варіант з map  ------------------------

// const ulFoodRef = document.querySelector("#ingredients");
// const foodIngredients = ingredients.map((ingredient) => {
//   let itemsEl = document.createElement("li");
//   itemsEl.innerHTML = ingredient;
//   itemsEl.classList.add("item");
//   return itemsEl;
// });

// ulFoodRef.append(...foodIngredients);

// ----------- з reduce ------------------------------

const ulFoodRef = document.querySelector("#ingredients");

const markupIngredients = ingredients.reduce(
  (acc, ingredient) => acc + `<li class = "item"> ${ingredient} </li>`,
  " "
);
ulFoodRef.insertAdjacentHTML("afterbegin", markupIngredients);
