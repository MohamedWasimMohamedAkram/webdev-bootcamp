//For API's you can have query parameters like swapi.dev/people/5?color=green&age=23
//The query is ?color=green&age=23. This isnt valid but this is how it works

const req = new XMLHttpRequest();

req.onload = function () {
  console.log("IT LOADED!!");
  const data = JSON.parse(this.responseText);
  console.log(data);
};

req.onerror = function () {
  console.log("ERROR!!!");
  console.log(this);
};

req.open("GET", "https://swapi.dev/api/people/1");
req.send();

// "https://swapi.dev/api/people/1"

//fetch
fetch("https://swapi.dev/api/people/1")
  .then((res) => {
    console.log("RESOLVED", res);
    //Need this to get the body contents
    res.json().then((data) => console.log("JSON DONE", data));
  })
  .catch((err) => {
    console.log("ERROR", err);
  });

//with async method - with async,you need to have try catch
const loadStarWarsPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/1");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/2");
    const data2 = await res2.json();
    console.log(data2);
  } catch (e) {
    console.log("ERROR IN ASYNC FUNCTION");
  }
};

loadStarWarsPeople();
