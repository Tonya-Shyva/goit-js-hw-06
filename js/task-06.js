const inputValue = document.getElementById("validation-input");
const totalLenght = Number(inputValue.dataset.length); // рядок приводимо до числа або parseInt(totalLenght, 10);
// -------------------------------------------------------------------
// inputValue.addEventListener("blur", onInput);

// function onInput(evt) {
//   if (totalLenght === evt.target.trim().length) {
//     inputValue.classList.add("valid");
//     if (inputValue.classList.contains("invalid")) {
//       inputValue.classList.remove("invalid");
//     }
//   } else {
//     if (inputValue.classList.contains("valid")) {
//       inputValue.classList.remove("valid");
//     }
//     inputValue.classList.add("invalid");
//   }
// }
// ----------------або------------------------------------------------
inputValue.oninput = function () {
  const inputValueLength = inputValue.value.trim().length;
  if (inputValueLength === totalLenght) {
    inputValue.classList.remove("invalid");
    inputValue.classList.add("valid");
  }
  if (inputValueLength === 0) {
    inputValue.classList.remove("valid");
    inputValue.classList.remove("invalid");
  }
  if (inputValueLength !== totalLenght && inputValueLength !== 0) {
    inputValue.classList.add("invalid");
  }
};
