//webpack runs from index.js so i have to import everything here
import "./style.css"; 
import "./template.html";
import {createTodo} from "./modules/todo.js";
import {createProject, storeTodo} from "./modules/project.js";
import {displayProject, displayTodo, displayCrossedout, displayNotCrossedout} from "./modules/display.js";

const projectForm = document.getElementById("newProject");
let projectObjects = []
let currentProject; //make the default project the first project u created

projectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const projectTitle = document.getElementById("projectTitleInput").value;

    const newProjectObject = createProject (projectTitle);
    //each project created should be accessible by storeTodo (even past projects), hence we're storing it in an array
    projectObjects.push(newProjectObject)
    currentProject = newProjectObject //make the default value if no user clicks a project
        
    //display the project after submitting the form
    displayProject(projectTitle)
})

const todoForm = document.getElementById("newTodo");

todoForm.addEventListener('submit', (e) => {
    e.preventDefault(); //prevent reloading
    todoContainer.replaceChildren() //refresh display everytime u submit a new todo

    const todoTitle = document.getElementById("titleInput").value;
    const todoDate = document.getElementById("dueDateInput").value;
    const todoPriority = document.getElementById("priorityInput").value;
    const todoDescription = document.getElementById("descriptionInput").value;
    const todoProject = document.getElementById("selectProjectInput").value;

    const newTodoItem = createTodo(todoTitle, todoDate, todoPriority, todoDescription, todoProject); //pass in the input values into the parameter
    
    //compare the selected options to know which was picked 
    const matchedProject = projectObjects.find(project => project.projectTitle === todoProject);
    console.log (matchedProject)
    storeTodo(matchedProject, newTodoItem) 

    //display the todo after submitting the form
    displayTodo(matchedProject)
})

//display todo items in a project everytime a specific project Object is clicked
const getClickedProject = document.querySelector("ul"); 
getClickedProject.addEventListener("click", (e) => {
    if (e.target.textContent === "Add New Project") {
        //ignore clicks from a li element if its the add new proj btn
    } else {
    const clickedProject = e.target.textContent
    const matchedProject = projectObjects.find(project => project.projectTitle === clickedProject);
    currentProject = matchedProject
    //find a projectObject with the title is the same as clickedProject
    todoContainer.replaceChildren()
    displayTodo(matchedProject)
    }
})

//reading the checkbox state, event delegation (put listner on parent container) + will optimize later with localStorage
const todoContainer = document.getElementById("todoContainer");
todoContainer.addEventListener('change', (e) => {
    const checkedbox = e.target.closest('input[type="checkbox"]');
    const checklist = document.querySelector(`p[data-id="${checkedbox.dataset.id}"]`) //get the first p with the same dataset.id as the checkedbox
    const completedTodo = currentProject.todoStorage.find(todoItem => todoItem.todoID === checkedbox.dataset.id) //find a project's todoItem that matches with the dataset.id

    if (checkedbox.checked) {
        completedTodo.completed = true;
        displayCrossedout(checklist)
    } else {
        completedTodo.completed = false;
        displayNotCrossedout(checklist)
    }
})

//deleting a specific todo, event delegation, cus it needs to listen for all the future dom elements
document.addEventListener('click', (e) => {
    if (e.target.matches('img')) {
        const deletedImg = e.target.dataset.id
        const updatedTodoList = currentProject.todoStorage.filter(todoItem => todoItem.todoID !== deletedImg); //returns an ARRAY everything else but the deleted todo
        //mutate the currentProject.todoStorage into the array that's in updatedTodoList
        currentProject.todoStorage = currentProject.todoStorage.filter(todoItem => todoItem.todoID !== deletedImg); 
        todoContainer.replaceChildren()
        displayTodo(currentProject)
    }
})

