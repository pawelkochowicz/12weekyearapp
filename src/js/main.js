"use strict";


const ul = document.querySelector('.taskList');
const addButton = document.querySelector('.addTaskButton');
const taskCounter = document.querySelector('.taskCounter');
const input = document.querySelector('.taskInput');

const addTask = (e) => {
e.preventDefault();
const taskTitle = input.value;
if (taskTitle === "") return;
const task = document.createElement('li');
task.className = 'task';
task.innerHTML = taskTitle + `<button class="removeButton"> Usuń</button>`;
ul.appendChild(task);
input.value = "";
task.querySelector('.removeButton').addEventListener('click', removeTask);
}

const removeTask = (e) => {
e.target.parentNode.remove();
}

addButton.addEventListener('click',addTask) 
