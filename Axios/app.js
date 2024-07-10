// axios
//   .get("https://swapi.dev/api/people/1")
//   .then((res) => {
//     console.log("RESPONSE", res.data);
//   })
//   .catch((e) => {
//     console.log("ERROR", e);
//   });

const getStarWarsPerson = async () => {
  try {
    const res = await axios.get("https://swapi.dev/api/people/1");
    console.log(res.data);
  } catch (e) {
    console.log("ERROR", e);
  }
};

getStarWarsPerson();

const jokeButton = document.querySelector("#jokeButton");
const jokes = document.querySelector("#jokes");

const getDadJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
  console.log(res);
  const newJoke = document.createElement("li");
  newJoke.innerText = res.data.joke;
  jokes.append(newJoke);
};

jokeButton.addEventListener("click", () => {
  getDadJoke();
});
