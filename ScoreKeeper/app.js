const p1 = {
  display: document.querySelector("#p1Display"),
  button: document.querySelector("#p1Plus"),
  count: 0,
};

const p2 = {
  display: document.querySelector("#p2Display"),
  button: document.querySelector("#p2Plus"),
  count: 0,
};

const resetBtn = document.querySelector("#resetBtn");
let maxPoints = document.querySelector("#maxPoints");
let maxPointsInt = parseInt(maxPoints.value);
let isGameOver = false;

function play(player, opponent) {
  if (!isGameOver) {
    player.count++;
    if (
      player.count >= maxPointsInt &&
      Math.abs(player.count - opponent.count) > 1
    ) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = parseInt(player.count);
  }
}

p1.button.addEventListener("click", function () {
  play(p1, p2);
});

p2.button.addEventListener("click", function () {
  play(p2, p1);
});
resetBtn.addEventListener("click", reset);

maxPoints.addEventListener("change", function () {
  maxPointsInt = parseInt(this.value);
  reset();
});

function reset() {
  p1.count = 0;
  p2.count = 0;
  p1.display.textContent = parseInt(p1.count);
  p2.display.textContent = parseInt(p2.count);
  p1.button.disabled = false;
  p2.button.disabled = false;
  isGameOver = false;
  p1.display.classList.remove("has-text-success", "has-text-danger");
  p2.display.classList.remove("has-text-success", "has-text-danger");
}
