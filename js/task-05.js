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

  nameOutputRef.textContent = event.currentTarget.value.trim()
    ? event.currentTarget.value.trim()
    : "Anonymus";
}
