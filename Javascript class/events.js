const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-nr b");

const mainTitle = document.querySelector(".main-title");

const nameInput = document.querySelector(".name-input");

const items = todoList.children;

//Attach an event listener

button.addEventListener("click", function (e) {
  e.preventDefault();
  const newItem = document.createElement("li");
  // Adding class
  newItem.classList.add("item");
  // adding the text
  newItem.innerText = nameInput.value;
  todoList.appendChild(newItem);
  todoNr.innerText = items.length;
  // Delete the value from the input
  nameInput.value = "";
  //create the element and attaching the listener to it
  newItem.addEventListener("click", deleteItem);
});

function deleteItem(e) {
  e.target.remove();
}

todoList.addEventListener("click", function () {
  todoList.classList.toggle("fade");
});

//button.addEventListener("click", function () {
// mainTitle.style.color = "red";
// mainTitle.style.fontSize = "50px";
//});
