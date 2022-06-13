document.addEventListener("DOMContentLoaded", () => {
  //grab all the necessary DOM elements
  //form and relevant input fields
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");
  //ul where new tasks will live on the DOM
  const newTaskUl = document.getElementById("tasks");
  //attach event listeners
  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
    event.preventDefault();
    const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;}
