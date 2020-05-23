const collectionItems = document.getElementsByClassName("item");
const todoList = document.getElementById("todo-list");
const todoNr = document.getElementsByClassName("todo-nr")[0];

const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "Item 3";

todoList.appendChild(newItem);

todoNr.innerText = collectionItems.length;
