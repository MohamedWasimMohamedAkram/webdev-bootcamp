// document.querySelector("button").addEventListener("click", function (evt) {
//   console.log(evt);
// });

// const input = document.querySelector("input");
// input.addEventListener("keydown", function (e) {
//   console.log("KEYDOWN");
//   console.log(e.key);
//   console.log(e.code);
// });

//use window.addEventListener if you want to listen to events in the whole window

//Form Events and PrventDefault
const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");
//For forms, you have submit event
form.addEventListener("submit", function (e) {
  //This prevents the default action and is mostly used in forms.In this case, it doesn't go to the action destination
  e.preventDefault();
  const catName = input.value;
  const newLI = document.createElement("li");
  newLI.innerText = catName;
  list.appendChild(newLI);
  input.value = "";
});
