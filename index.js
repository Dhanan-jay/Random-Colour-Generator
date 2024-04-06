let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let h2 = document.querySelector("h2");
  h2.innerText = randomColor();
  let colorBox = document.querySelector(".color-box");
  colorBox.style.backgroundColor = randomColor();
});

function randomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let rgb = `rgb(${red},${green},${blue})`;
  return rgb;
}
