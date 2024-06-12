const btn = document.querySelector("#v2");

//Method 2 - Better than inline events
btn.onclick = function () {
  console.log("Got Clicked");
  console.log("Worksss");
};

function scream() {
  console.log("AAAAAAAAAH");
  console.log("Stop Touching Me");
}

function shout() {
  console.log("AAAAAAAAAH");
}

btn.onmouseenter = scream;

//Method 3 - Better than onlick previous way
const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", function () {
  alert("Clicked");
});

const tas = document.querySelector("#tas");
//Cant assign 2 functions to one button this way
tas.onclick = scream;
tas.onclick = shout;

//Can do it using eventListener. Can slo add other params like once: true which runs eventListener once and then it goes away
tas.addEventListener("click", scream);
tas.addEventListener("click", shout);
