//Selection

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

//Manipulation
//textContent shows everything the way its in VSCode, with the spacing and the hidden elements. It's not like that with innerText
const firstLink = document.querySelector("a");
//Can getAttribute with class, id, title etc
firstLink.getAttribute("href");

const firstHeading = document.querySelector("h1");

window.getComputedStyle(firstHeading); //This gives the computed styles after everything is applied

const secondHeading = document.querySelector("h2");

//Method 1 - can only add one specific attribute
secondHeading.setAttribute("class", "purple");

//Method 2 - can add multiple classes
secondHeading.classList.add("border");

secondHeading.classList.remove("purple");

secondHeading.classList.toggle("purple");

const firstBold = document.querySelector("b");
//Accessing parent element
const paraParent = firstBold.parentElement; // This is paragraph
paraParent.children; // Gives the children in html collection

//Next is sibling
const firstSquare = document.querySelector(".square");
firstSquare.nextElementSibling;
//nextSibling gives nodes and not elements so use elementSibling

//Creating elements
const newImg = document.createElement("img");
newImg.src =
  "https://images.unsplash.com/photo-1716660565802-52f1a05c4f79?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//Created but need to append
// appendChild adds it as the last child of an element
document.body.appendChild(newImg);
newImg.classList.add("square");

const newH3 = document.createElement("h3");
newH3.innerText = "I am new";
document.body.appendChild(newH3);

//append has not IE support. Allows more than one insert at a time. Can directly add
firstPara.append("Adddddesdddd texttt");
//Prepend adds as the first child
const newB = document.createElement("b");
//Append used to add innerText
newB.append("Hi");
firstPara.prepend(newB);

//insertAdjacentElement - positions are afterend or beforebegin
const head2 = document.createElement("h2");
head2.append("Are you real chickens?");
const h1 = document.querySelector("h1");
h1.insertAdjacentElement("afterend", head2);

//remove or removeChild
const firstLi = document.querySelector("li");
const ul = firstLi.parentElement;
ul.removeChild(firstLi);

//remove
newImg.remove();
