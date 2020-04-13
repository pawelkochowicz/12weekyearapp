"use strict";

const form = document.querySelector('.taskForm')
const ul = document.querySelector('.taskList');
const addButton = document.querySelector('.addTaskButton');
const taskCounter = document.querySelector('.taskCounter');
const input = document.querySelector('.taskInput');
let itemsArray = [];

// const start = (e) => {
//   if (!localStorage.getItem('task')) {
//     task.innerHTML = "";
//     taskCounter.innerHTML = 0;
//   } else {
//     task.innerHTML = localStorage.getItem('task') + `<button class="removeButton">Usuń</button>`;
//     task.className = 'task';
//     ul.appendChild(task);
//     task.querySelector('.removeButton').addEventListener('click', removeTask);
//     taskCounter.innerHTML = listItems.length;
//   }
// }

// const removeTask = (e) => {
//   e.target.parentNode.remove();
//   localStorage.removeItem("task")
//   taskCounter.innerHTML = listItems.length;
// }


const addTask = (e) => {
  e.preventDefault();
  if (input.value === "") return;
  const task = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  }
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  const data = JSON.parse(localStorage.getItem('items'));
  task(input.value);
  input.value = "";
}

// start();
form.addEventListener('submit', addTask)



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
