// let password = prompt("Enter Password?");
// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("Valid password");
//   } else {
//     console.log("Password cannot contain spaces");
//   }
// } else {
//   console.log("Password is too short");
// }

// "" is a false value too, so is null, NaN
let arr = [9, 8, "txt", false, ["chain", "arr"]];
//pop removes from end, push adds to end, shift removes from start, unshift adds to start

//objects are used with key value pairs rather than indexes
const userData = {
  age: 20,
  name: "John",
  occupation: "Tester",
  hobbies: ["reading", "cooking"],
};
//can change the values inside the object
for (let i = 0; i <= arr.length; i++) {
  console.log(i, arr[i]);
}

let arr2 = ["mancity", 8, "madrid", "barca", 992];

for (let num of arr2) {
  console.log(num);
}

let obj1 = { name: "Was", age: 20, gender: "male", hobbies: ["gaming", "tv"] };
// for of used with iterables like arrays, object isnt iterable
for (char of "Helllooo") {
  console.log(char);
}

// for in used with objects but gives key value
for (item in obj1) {
  console.log(`Key Value - ${item} ----- ${obj1[item]}`);
}

console.log(Object.keys(obj1)); //This is an array of keys
console.log(Object.values(obj1)); //This is an array of values

// function greet(person) {
//   console.log(`Hello ${person}`);
// }

//Functions are values too like arrays
const square = function (x) {
  return x * x;
};

let greet = function () {
  console.log("HI!!!");
};

let returnNum = function () {
  return 2;
};

function callTwice(func) {
  func();
  func();
}

function doubleReturn(func) {
  return func();
}

function returnFunc() {
  return function () {
    console.log("You returned function");
  };
}

const math = {
  PI: 3.14159,
  square: function (num) {
    return num * num;
  },
  cube: function (num) {
    return num ** 3;
  },
  add(x, y) {
    return x + y;
  },
};

//this is mainly used inside function inside object
const cat = {
  name: "Fleety Sims",
  color: "grey",
  breed: "scottish fold",
  meow() {
    //this refers to the cat variables
    console.log(`This ${this.breed} says Meow`);
  },
};

//This wont give the breed variable
const meow2 = cat.meow;
meow2();

function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    console.log(e);
    console.log("Please pass a string next time");
  }
}
