const form = document.querySelector(".taskForm");
const ul = document.querySelector(".taskList");
const addButton = document.querySelector(".addTaskButton");
const taskCounter = document.querySelector(".taskCounter");
const input = document.querySelector(".taskInput");
let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

const removeTask = (e) => {
  const index = e.target.parentNode.remove();
  itemsArray.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(itemsArray));
};

localStorage.setItem("items", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("items"));

const task = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  const button = document.createElement("button");
  button.textContent = "usuń";
  li.appendChild(button);
  ul.appendChild(li);
  button.addEventListener("click", removeTask);
};

data.forEach((item) => {
  task(item);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  itemsArray.push(input.value);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  task(input.value);
  input.value = "";
});