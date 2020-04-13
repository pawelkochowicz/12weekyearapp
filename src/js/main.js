"use strict";


const ul = document.querySelector('.taskList');
const addButton = document.querySelector('.addTaskButton');
const taskCounter = document.querySelector('.taskCounter');
const input = document.querySelector('.taskInput');
const listItems = document.getElementsByClassName('task');
const task = document.createElement('li');


const start = (e) => {
  if (!localStorage.getItem('task')) {
    task.innerHTML = "";
    taskCounter.innerHTML = 0;
  } else {
    task.innerHTML = localStorage.getItem('task') + `<button class="removeButton">Usuń</button>`;
    task.className = 'task';
    ul.appendChild(task);
    task.querySelector('.removeButton').addEventListener('click', removeTask);
    taskCounter.innerHTML = listItems.length;
  }
}

const removeTask = (e) => {
  e.target.parentNode.remove();
  localStorage.removeItem("task")
  taskCounter.innerHTML = listItems.length;
}


const addTask = (e) => {
  e.preventDefault();
  if (input.value === "") return;
  task.className = 'task';
  localStorage.setItem('task', input.value)
  task.innerHTML = localStorage.getItem('task') + `<button class="removeButton">Usuń</button>`;
  input.value = "";
  ul.appendChild(task);
  taskCounter.innerHTML = listItems.length;
  task.querySelector('.removeButton').addEventListener('click', removeTask);

}

start();
addButton.addEventListener('click', addTask)