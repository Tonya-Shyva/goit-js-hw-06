function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumRef = document.querySelector('input[type = "number"]');
const btnCreateRef = document.querySelector("button[data-create]");
const btnDestroyRef = document.querySelector("button[data-destroy]");
const boxesRef = document.getElementById("boxes");

btnCreateRef.addEventListener("click", () => {
  const boxesToAdd = createBoxesEl(inputNumRef.value);
  boxesRef.append(...boxesToAdd);
});

btnDestroyRef.addEventListener("click", destroyBoxes);

function createBoxesEl(amount) {
  const elementsToAdd = [];

  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.height = ` ${20 + 10 * i}px`;
    divEl.style.width = `${20 + 10 * i}px`;
    divEl.style.background = getRandomHexColor();
    elementsToAdd.push(divEl);
  }
  return elementsToAdd;
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
  inputNumRef.value = boxesRef.innerHTML;
}
