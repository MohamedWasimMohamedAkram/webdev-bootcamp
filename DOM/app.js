//Get an element by ID. THis gives null if there's no element
const bannerImg = document.getElementById("banner");

//Gets elements (multiple) by tag name and class name. They are stored in HTML collection but they are not arrays. This gives empty collection if there's no elements
const allImgs = document.getElementsByTagName("img");

const squareImgs = document.getElementsByClassName("square");

//querySelector and querySelectorAll. It can choose all types
const firstPara = document.querySelector("p");
//This returns a nodelist. It's like html collection or array
const allParas = document.querySelectorAll("p");
//Search id by entering the # before and class with . before
const bannerImg2 = document.querySelectorAll("#banner");
//Query can have attributes too
const secondPara = document.querySelector("p:nth-of-type(2)");

const anchorTag = document.querySelector('a[title="Java"]');

const links = document.querySelectorAll("p a");

for (link of links) {
  console.log(link.href);
}
