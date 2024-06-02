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

//forEach - Do a specific function for each element in an array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nums.forEach(function (el) {
  console.log(el);
});

const movies = [
  {
    title: "Godzilla",
    score: 90,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Monkey Man",
    score: 92,
  },
  {
    title: "Bad Boys",
    score: 94,
  },
];

movies.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.score}/100`);
});

//map - Creates a NEW ARRAY with the results of calling a callback on every element in the array. Map from one state to another. Used to modify the array and make it into a new array
const doubles = nums.map(function (num) {
  return num * 2;
});

const titles = movies.map(function (movie) {
  return movie.title;
});

//arrow function - no internet explorer support
const squares = (x) => {
  return x * x;
};
//Without params
const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};
//even more compact
const rollDieCompact = () => Math.floor(Math.random() * 6) + 1;

const squaresCompact = (x) => x * x;

const movieScore = movies.map(
  (movie) => `${movie.title} - ${movie.score / 10}`
);
console.log("Hello");
//setTimeout and setInterval
setTimeout(() => {
  console.log("Are you still there?");
}, 3000); //Calls function after 3000ms

const id = setInterval(() => {
  console.log(Math.random());
}, 2000); //Calls function every 2000ms
clearInterval(id); //stops the interval function based on the ID you pass

//filter method - creates a NEW ARRAY with all the elements that pass the test implemented by the provided function
const filtered = nums.filter((n) => {
  return n < 5;
});

const filterMovies = movies.filter((m) => m.score > 80);

const goodTitles = movies.filter((m) => m.score > 80).map((m) => m.title);

//some and every method - returns boolean
const exams = [80, 95, 55, 100, 49, 32, 87, 69, 75, 72];

const allPass = exams.every((e) => e > 70);
const somePass = exams.some((e) => e > 70);

//reduce - executes a reducer function on each element of the array resulting in a single value

const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

const total = prices.reduce((total, price) => {
  return total + price;
});

//This gives total an initial value to begin with
const totalWithInitial = prices.reduce((total, price) => {
  return total + price;
}, 100);

//THis is the same as ->
let sum = 0;
for (price of prices) {
  sum = sum + price;
}

const maxPrice = prices.reduce((max, price) => {
  if (price > max) {
    return price;
  }
  return max;
});

//arrow function uses `this` in a different way
const person = {
  firstName: "Viggo",
  lastName: "Mortensen",
  //This doesn't refer to the first and lastName from object but instead to window
  fullName: () => {
    return `${this.firstName} ${this.lastName}`;
  },
};

//Default Parameters
function rollDieDefaultParam(nums = 6) {
  return Math.floor(Math.random() * nums) + 1;
}

//Spread in Function Calls
//functions like Math.max(23,2443) which takes any number of params
console.log(...nums); //This spreads the array and prints each number out
//You can do this with all iterables like string too

const cats = ["British", "Egyptian", "Himalayan"];
const dogs = ["Labrador", "Pitbull", "Pug", "K9"];

const catsAndDogs = [...cats, ...dogs];

//Spread in Object Literals
const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };

const catDog = { ...feline, ...canine }; //Gets overwritten by last param

const addInfo = { ...feline, color: "brown" };

//Rest - looks like spread but it's not
// function sumArg() {
//   console.log(arguments);
// }

//Rest makes args into arrays
function sumArg(...nums) {
  console.log(nums);
}

//Destructuring arrays
const scores = [93232, 89342, 88355, 77393, 99131, 54544];

const [gold, silver, ...everythingElse] = scores;

//Destructuring Objects
const user = {
  email: "tester@gmail.com",
  password: "qkdfd94fd",
  firstName: "Tester",
  lastName: "Master",
  born: 1960,
  died: 2010,
  city: "New York",
};

const { email, city, password } = user;
//This renames the variable orignal:renamed
const { died: death } = user;
//This sets a value
const { notThere = "I made this now" } = user;

//Destructuring Params
function fullNameMethod({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
