let count = 1;
let maxNum = parseInt(prompt("Enter your Max Number: "));
let guess;
let randNum = Math.floor(Math.random() * maxNum) + 1;
while (parseInt(guess) !== randNum) {
  guess = prompt("Enter your guess: ");
  if (guess === "q") {
    console.log(`YOU QUIT!!`);
    break;
  }
  count++;
  if (guess > maxNum) {
    guess = prompt("Too high, enter a value lower than Maximum Number ");
  } else if (guess < 0) {
    guess = prompt("Too low, enter a valid number ");
  } else {
    guess = prompt("Enter your guess: ");
  }
}
console.log(
  `You win, you guessed it in ${count} guesses and random number was ${randNum}`
);
