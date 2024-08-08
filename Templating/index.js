const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

app.set("view engine", "ejs");
//This combines the views folder into the index.js working directory so whenever index.js is called, it saysviews will be in that same folder
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/cats", (req, res) => {
  const cats = ["Blue", "Rocket", "Monty", "Stephanie", "Winston"];
  res.render("cats", { cats });
});

// Use <% %> to use code that doesn't show in the page so code that is used to compute but not visible in site
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("subreddit", { ...data });
  } else {
    res.render("error", { subreddit });
  }
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
