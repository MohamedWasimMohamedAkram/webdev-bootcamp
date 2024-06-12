function generateColor() {
  let redNum = Math.floor(Math.random() * 255) + 1;
  let greenNum = Math.floor(Math.random() * 255) + 1;
  let blueNum = Math.floor(Math.random() * 255) + 1;
  return `rgb(${redNum},${greenNum},${blueNum})`;
}

const btns = document.querySelectorAll("button");
const h1s = document.querySelectorAll("h1");

for (let button of btns) {
  button.addEventListener("click", colorize);
}

for (let h1 of h1s) {
  h1.addEventListener("click", colorize);
}

//Too much duplication above - replace the h1 or button with this to avoid duplication.this refers to something that triggers and event in this case
function colorize() {
  this.style.backgroundColor = generateColor();
  this.style.color = generateColor();
}
