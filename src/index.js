//webpack runs from index.js so i have to import everything here
import "./style.css"; 
import "./template.html";
import {createTodo} from "./modules/todo.js";
import {createProject, storeTodo} from "./modules/project.js";
import {displayProject, displayTodo} from "./modules/display.js";


const projectForm = document.getElementById("newProject");
let projectObjects = []

projectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const projectTitle = document.getElementById("projectTitleInput").value;

    const newProjectObject = createProject (projectTitle);
    //each project created should be accessible by storeTodo (even past projects), hence we're storing it in an array
    projectObjects.push(newProjectObject)
        
    
    //display the project after submitting the form
    displayProject(projectTitle)
})

const todoForm = document.getElementById("newTodo");

todoForm.addEventListener('submit', (e) => {
    e.preventDefault(); //prevent reloading

    const todoTitle = document.getElementById("titleInput").value;
    const todoDate = document.getElementById("dueDateInput").value;
    const todoPriority = document.getElementById("priorityInput").value;
    const todoDescription = document.getElementById("descriptionInput").value;
    const todoProject = document.getElementById("selectProjectInput").value;

    const newTodoItem = createTodo(todoTitle, todoDate, todoPriority, todoDescription, todoProject); //pass in the input values into the parameter
    
    //compare the selected options to know which was picked 
    const matchedProject = projectObjects.find(project => project.projectTitle === todoProject);

    storeTodo(matchedProject, newTodoItem) 
        console.log(matchedProject.todoStorage) 

    //display the todo after submitting the form
    displayTodo(todoTitle,todoDate)
})



