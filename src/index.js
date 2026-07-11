//webpack runs from index.js so i have to import everything here
import "./style.css"; 
import "./template.html";
import {createTodo} from "./modules/todo.js";
import {createProject} from "./modules/project.js";
import "./modules/display.js"
import {displayProject} from "./modules/display.js";

const todoForm = document.getElementById("newTodo");

todoForm.addEventListener('submit', (e) => {
    e.preventDefault(); //prevent reloading
    
    const todoTitle = document.getElementById("titleInput").value;
    const todoDate = document.getElementById("dueDateInput").value;
    const todoPriority = document.getElementById("priorityInput").value;
    const todoDescription = document.getElementById("descriptionInput").value;

    createTodo(todoTitle, todoDate, todoPriority, todoDescription); //pass in the input values into the parameter


        //display the todo after submitting the form
})

const projectForm = document.getElementById("newProject");

projectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const projectTitle = document.getElementById("projectTitleInput").value;

    createProject (projectTitle);
    console.log("project title:" + projectTitle)
    
    //display the project after submitting the form
    displayProject(projectTitle)
})

