const colorBtn = document.querySelector("#colorGen");
const body = document.querySelector("body");
const colorHeading = document.querySelector("#colorHeading");

function generateColor() {
  let redNum = Math.floor(Math.random() * 255) + 1;
  let greenNum = Math.floor(Math.random() * 255) + 1;
  let blueNum = Math.floor(Math.random() * 255) + 1;
  body.style.backgroundColor =
    "rgb(" + [redNum, greenNum, blueNum].join(",") + ")";
  colorHeading.innerText = `rgb(${redNum},${greenNum},${blueNum})`;
}

colorBtn.addEventListener("click", generateColor);
