const input = document.querySelector("input");
const h2 = document.querySelector("h2");
//Only triggered when you leave the input so if you click outside or press enter
// input.addEventListener("change", function (e) {
//   console.log("Changed");
// });

//This triggers change everytime an input is changed
input.addEventListener("input", function (e) {
  console.log(e);
  h2.innerText = input.value;
});
//event.stopPropagation() stops bubbling and ends where the event does and it doesnt bubble onto the parent.

//if you want to set click listeners to all children of a parent, dont set it to the children, but instead, set it to the parent and then use event.target to check if it's a child and then event.target.remove();
