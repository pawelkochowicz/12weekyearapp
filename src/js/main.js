"use strict";

const form = document.querySelector('.taskForm')
const ul = document.querySelector('.taskList');
const addButton = document.querySelector('.addTaskButton');
const taskCounter = document.querySelector('.taskCounter');
const input = document.querySelector('.taskInput');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const task = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}
// const removeTask = (e) => {
//   e.target.parentNode.remove();
//   localStorage.removeItem("task")
//   taskCounter.innerHTML = listItems.length;
// }


form.addEventListener('submit', function (e) {
  e.preventDefault();
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  task(input.value);
  input.value = "";
})

data.forEach(item => {
  task(item)
});




  // task.className = 'task';
  // myTask.push(input.value)
  // localStorage.setItem('task', myTask)
  // task.innerHTML = localStorage.getItem('task') + `<button class="removeButton">Usuń</button>`;
  // input.value = "";
  // for (let i = 0; i < myTask.length; i++) {
  //  const task = document.createElement('li').innerHTML = myTask[i];
  //   ul.appendChild(task);
  // }
  // ul.appendChild(task);
  // taskCounter.innerHTML = myTask.length;
  // task.querySelector('.removeButton').addEventListener('click', removeTask);
