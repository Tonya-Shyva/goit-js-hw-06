function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyRef = document.querySelector("body");
const changeColorBtnRef = document.querySelector(".change-color");
const colorValueRef = document.querySelector(".color");

changeColorBtnRef.addEventListener("click", (e) => {
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  colorValueRef.textContent = color;
});
