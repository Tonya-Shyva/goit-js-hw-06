const inputValRef = document.getElementById("validation-input");
const totalLenght = Number(inputValRef.dataset.length); // рядок приводимо до числа або parseInt(totalLenght, 10);
// -------------------------------------------------------------------
// inputValRef.addEventListener("blur", onInput);

// function onInput(evt) {
//   if (totalLenght === evt.target.value.length) {
//     inputValRef.classList.add("valid");
//     if (inputValRef.classList.contains("invalid")) {
//       inputValRef.classList.remove("invalid");
//     }
//   } else {
//     if (inputValRef.classList.contains("valid")) {
//       inputValRef.classList.remove("valid");
//     }
//     inputValRef.classList.add("invalid");
//   }
// }
// ----------------або------------------------------------------------
inputValRef.oninput = function () {
  if (inputValRef.value.length === totalLenght) {
    inputValRef.classList.remove("invalid");
    inputValRef.classList.add("valid");
  }
  if (inputValRef.value.length === 0) {
    inputValRef.classList.remove("valid");
    inputValRef.classList.remove("invalid");
  }
  if (
    inputValRef.value.length !== totalLenght &&
    inputValRef.value.length !== 0
  ) {
    inputValRef.classList.add("invalid");
  }
};
