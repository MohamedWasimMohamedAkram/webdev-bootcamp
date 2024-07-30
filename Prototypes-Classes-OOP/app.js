//Factory Methods

// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function () {
//     const { r, g, b } = this; // this refers to color
//     return `rgb(${r}, ${g}, ${b})`;
//   };
//   return color;
// }

//Constructor Function
// function Color(r, g, b) {
//   //Constructor Functions start with capital letters
//   this.r = r;
//   this.g = g;
//   this.b = b;
//   //This refers to the nearest object
// }

//With constructor, you have to use new keyword
//Constructor does what Factory does with objects behind the scenes. If you want to add methods to it, you have to do this:

// A constructor enables you to write methods to the object itself, which you can not do without a constructor.
// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r}, ${g}, ${b})`;
// };

// const color1 = new Color(25, 36, 56);
// color1.hex();

//Class
// class Color {
//   constructor(r, g, b, name) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.name = name;
//   }
//   //Dont need to use proto to make methods
//   innerRGB() {
//     const { r, g, b } = this;
//     return `${r}, ${g}, ${b}`;
//   }
//   rgb() {
//     return `rgb(${this.innerRGB()})`;
//   }
//   rgba(a = 1.0) {
//     return `rgba(${this.innerRGB()}, ${a})`;
//   }
// }

// const c1 = new Color(255, 67, 89, "tomato");

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    //super() takes the args from the parents class
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return "MEOWWWWW!!";
  }
}

class Dog extends Pet {
  bark() {
    return "WOOOF!!";
  }
}
