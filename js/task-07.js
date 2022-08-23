const controlFontSizeRef = document.querySelector("#font-size-control");

const textRef = document.getElementById("text");

controlFontSizeRef.oninput = function () {
  textRef.style.fontSize = controlFontSizeRef.value + "px";
};
