const jokes = require("give-me-a-joke");
const colors = require("colors");
console.log(jokes);

jokes.getRandomDadJoke(function (joke) {
  console.log(joke.rainbow);
});

// npm install package-name is for local install and cannot be required outside directory

// use npm install -g package-name to install globally

//if you have a package.json, then use npm install to install dependencies based on the package.json file
