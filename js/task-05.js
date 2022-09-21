const inputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");
inputRef.addEventListener("input", onInpytChange);

function onInpytChange(event) {
  // if (inputRef.value.trim() === "") {
  //   nameOutputRef.innerHTML = "Anonymous";
  // } else {
  //   nameOutputRef.textContent = event.currentTarget.value.trim();
  // }

  // ----------- якщо тернарником----------------------------

  inputRef.value.trim() === ""
    ? (nameOutputRef.innerHTML = "Anonymous")
    : (nameOutputRef.textContent = event.currentTarget.value.trim());
}
