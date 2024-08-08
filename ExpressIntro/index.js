const express = require("express");
const app = express();
console.dir(app);

// app.use((req, res) => {
//   console.log("Running");
//   //If you have res.send, it means that is the only request you have
//     res.send("<h1>Hello, we got your request. This is a response</h1>");
// });

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});

//Routing
// /cats => 'meow'
// /dogs => 'woof'
app.get("/", (req, res) => {
  res.send("This is the homepage");
});

//Matches /r/something pattern like /r/games
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Browsing the ${subreddit}, ${postId} subreddit</h1>`);
});

app.get("/cats", (req, res) => {
  res.send("MEOW!!");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF!!");
});

app.get("search", (req, res) => {
  console.log(req.query);
  res.send("SENT");
});

//This is for undefined paths. DO NOT PUT IT ABOVE THE VALID PATHS
app.get("*", (req, res) => {
  res.send("NOT A VALID REQUEST!!");
});

//install nodemon package to check live updates to code like liveserver
