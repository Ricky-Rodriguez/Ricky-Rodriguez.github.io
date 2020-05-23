// Local storage

// localStorage.setItem("todo", "Feed the cat");
// localStorage.setItem("user", "Ed");
// localStorage.setItem("todo", "Feed myself");

//Session Storage

//sessionStorage.setItem("todoList", "session feeding cat");

//Getting stuff back
// const user = localStorage.getItem("user");

// console.log(user);

const todoList = ["feed cat", "wash", "listen to music"];

localStorage.setItem("todos", JSON.stringify(todoList));

const retrieved = JSON.parse(localStorage.getItem("todos"));

console.log(retrieved);
