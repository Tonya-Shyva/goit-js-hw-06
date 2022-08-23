// // const categoriesListRef = document.querySelector('#categories');
// // const categoriesListItems = categoriesListRef.children;

// // -------------Варіант 2---------------------------------------------
// // Звернутись до li напряму (але в майбутньому у html нашого document може бути багато елементів з таким класом, тому використовуємо обережно і уважно)
// const categoriesListItems = document.querySelectorAll('.item');
// console.log(`Number of categories: ${categoriesListItems.length}`);

// const categoriesContent = [...categoriesListItems]
//   .map(
//     categories => `Category: ${categories.children[0].textContent}
// Elements: ${categories.children[1].children.length}`
//   )
//   .join('\n');
// console.log(categoriesContent);
