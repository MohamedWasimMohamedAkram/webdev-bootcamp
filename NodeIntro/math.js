const add = (x, y) => x + y;
const PI = 3.14159;
const square = (x) => x * x;

//This is what is exported to the files that 'require' this file
//Method 1
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

//Method 2
const math = {
  add: add,
  PI: PI,
  square: square,
};

module.exports = math;

//Method 3

// module.exports.add = (x, y) => x + y;
// module.exports.PI = 3.14159;
// module.exports.square = (x) => x * x;

//Method 4
// exports.add = (x, y) => x + y;
// exports.PI = 3.14159;
// exports.square = (x) => x * x;
