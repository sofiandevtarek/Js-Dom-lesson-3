//*  Dom l3

const ul = document.createElement("ul");

const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");

const text1 = document.createTextNode("Home");
const text2 = document.createTextNode("About");
const text3 = document.createTextNode("Projects");

ul.append(li1, li2, li3);
ul.setAttribute("class", "nav-list");

li1.append(text1);
li2.append(text2);
li3.append(text3);
console.log(ul);

const body = document.body;
console.log(body);

body.append(ul);
