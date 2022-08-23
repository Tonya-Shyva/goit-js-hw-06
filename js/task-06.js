const inputValRef = document.getElementById("validation-input");
const totalLenght = inputValRef.dataset.length;
const intTotallenght = parseInt(totalLenght, 10);

inputValRef.oninput = function () {
  if (inputValRef.value.length === intTotallenght) {
    inputValRef.classList.remove("invalid");
    inputValRef.classList.add("valid");
  }
  if (inputValRef.value.length === 0) {
    inputValRef.classList.remove("valid");
    inputValRef.classList.remove("invalid");
  }
  if (
    inputValRef.value.length !== intTotallenght &&
    inputValRef.value.length !== 0
  ) {
    inputValRef.classList.add("invalid");
  }
};
