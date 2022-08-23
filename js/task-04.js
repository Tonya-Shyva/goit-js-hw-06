const refs = {
  btnSub: document.querySelector("[data-action='increment']"),
  btnAdd: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"),
};

let counterValue = 0;
const increment = () => {
  counterValue += 1;

  refs.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  refs.span.textContent = counterValue;
};

refs.btnSub.addEventListener("click", increment);
refs.btnAdd.addEventListener("click", decrement);
