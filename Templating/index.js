const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
//This combines the views folder into the index.js working directory so whenever index.js is called, it saysviews will be in that same folder
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/rand", (req, res) => {
  // Generate random number and pass it there rather than generating it in ejs file
  const num = Math.floor(Math.random() * 10) + 1;
  //Passing num as rand to the ejs file. can also send as {num: num}
  res.render("random", { rand: num });
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
