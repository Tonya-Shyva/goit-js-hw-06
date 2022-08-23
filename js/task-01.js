const categoriesListRef = document.querySelector("#categories");
const categoriesListItems = categoriesListRef.children;

console.log(`Number of categories: ${categoriesListItems.length}`);

const categoriesContent = [...categoriesListItems]
  .map(
    (categories) => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesContent);
