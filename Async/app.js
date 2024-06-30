//Call Stack is how JS interpreter keeps track of script that calls multiple functions - LIFO
//Check website called loupe to visualize call stack
//Can also use debugger in sources
const body = document.querySelector("body");
// setTimeout(function () {
//   setTimeout(() => {
//     setTimeout(() => {
//       body.style.backgroundColor = "yellow";
//     }, 2000);
//     body.style.backgroundColor = "orange";
//   }, 2000);
//   body.style.backgroundColor = "red";
// }, 2000);

function delay(color, value, doNext) {
  setTimeout(() => {
    document.body.style.backgroundColor = color;
    doNext && doNext();
  }, value);
}

delay("blue", 2000, () => {
  delay("orange", 2000, () => {
    delay("red", 2000, () => {});
  });
});
