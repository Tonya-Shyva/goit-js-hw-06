const inputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");
inputRef.addEventListener("input", onInpytChange);

function onInpytChange(event) {
  if (inputRef.value === "") {
    nameOutputRef.innerHTML = "Anonymous";
  } else {
    nameOutputRef.textContent = event.currentTarget.value;
  }
}
