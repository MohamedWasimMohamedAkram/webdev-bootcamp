const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve("YOUR FAKE DATA HERE");
      }
      reject("REQUEST ERROR");
    }, 1000);
  });
};

// fakeRequest("/dogs/1")
//   .then((data) => {
//     console.log("DONE WITH REQUEST");
//     console.log("data is:", data);
//   })
//   .catch((err) => {
//     console.log("OH NO", err);
//   });

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// delayedColorChange("violet", 1000)
//   .then(() => {
//     return delayedColorChange("indigo", 1000);
//   })
//   .then(() => {
//     return delayedColorChange("blue", 1000);
//   })
//   .then(() => {
//     return delayedColorChange("green", 1000);
//   })
//   .then(() => {
//     return delayedColorChange("yellow", 1000);
//   })
//   .then(() => {
//     return delayedColorChange("orange", 1000);
//   })
//   .then(() => {
//     return delayedColorChange("red", 1000);
//   });

//Async and Await
//Async Function always returns a promise
//If the async function returns a value, then the promise is resolved with the value

//So basically async function is hidden promise return
const sing = async () => {
  //Throw rejects promise with the value
  //   throw "OH NO PROBLEM";
  //This is the value returned as the resolve
  return "SINGINGG";
};

sing()
  .then((data) => {
    console.log("Promise resolved with: ", data);
  })
  .catch((err) => {
    console.log("Promise rejected with: ", err);
  });

//Await will pause the execution of the function, waiting for a promise to be resolved. Have to pair it with async mostly
//No need for .then
async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("indigo", 1000);
  await delayedColorChange("violet", 1000);
  return "ALL DONE";
}
