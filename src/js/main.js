"use strict";


const ul = document.querySelector('.taskList');
const addButton = document.querySelector('.addTaskButton');
const taskCounter = document.querySelector('.taskCounter');
const input = document.querySelector('.taskInput');
const listItems = document.getElementsByClassName('task');



if (!localStorage.getItem(input)) {
  taskCounter.innerHTML = '0';
} else {
  taskCounter.innerHTML = localStorage.getItem(input)
}

const addTask = (e) => {
  e.preventDefault();
  localStorage.setItem('task', input.value)
  // taskCounter.innerHTML = localStorage.getItem(input);
  // const task = document.createElement('li');
  // task.className = 'task';
  input.value = "";
  // task.querySelector('.removeButton').addEventListener('click', removeTask);
  // taskCounter.innerHTML = listItems.length;
  // }

  // const removeTask = (e) => {
  // e.target.parentNode.remove();
  // taskCounter.innerHTML = listItems.length;
  // localStorage.removeItem("task")
}

addButton.addEventListener('click', addTask)




// const taskTitle = input.value;
// if (taskTitle === "") return;
// task.innerHTML = 
// ul.appendChild(task);