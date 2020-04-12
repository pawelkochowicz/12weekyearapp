"use strict";


const ul = document.querySelector('.taskList');
const addButton = document.querySelector('.addTaskButton');
const taskCounter = document.querySelector('.taskCounter');
const input = document.querySelector('.taskInput');
const listItems = document.getElementsByClassName('task')

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
taskCounter.innerHTML = listItems.length;
}

const removeTask = (e) => {
e.target.parentNode.remove();
taskCounter.innerHTML = listItems.length;
}

addButton.addEventListener('click',addTask) 
