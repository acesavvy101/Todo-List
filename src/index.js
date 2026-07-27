//webpack runs from index.js so i have to import everything here
import "./style.css"; 
import "./template.html";
import {createTodo} from "./modules/todo.js";
import {createProject, storeTodo} from "./modules/project.js";
import {displayProject, displayTodo, displayCrossedout, displayNotCrossedout, displayInstructions} from "./modules/display.js";

const projectForm = document.getElementById("newProject");
let projectObjects = []
let currentProject; //make the default project the first project u created

projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
   
    const projectTitle = document.getElementById("projectTitleInput").value;

    const newProjectObject = createProject (projectTitle);
    //each project created should be accessible by storeTodo (even past projects), hence we're storing it in an array
    projectObjects.push(newProjectObject)
    saveToStorage("projects", projectObjects);

    currentProject = newProjectObject //make the default value if no user clicks a project
        
    //display the project after submitting the form
    displayProject(projectObjects)
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
    saveToStorage("projects", projectObjects); //also saves the todoStorage in each projobj

    //display the todo after submitting the form
    displayTodo(matchedProject)
})

//display todo items in a project everytime a specific project Object is clicked
const getClickedProject = document.querySelector("ul"); 
getClickedProject.addEventListener("click", (e) => {
    if ((e.target.textContent === "Add New Project") || (e.target.closest('#trashcanImgProject'))) {
        //ignore clicks from a li element if its the add new proj btn or deletebtnproject
    } else {
        const clickedProject = e.target.textContent
        const matchedProject = projectObjects.find(project => project.projectTitle === clickedProject);
    currentProject = matchedProject
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

    saveToStorage("projects", projectObjects); //ADD THIS TO SAVE STATE OF CHECKLIST
})

//deleting a specific todo, event delegation, cus it needs to listen for all the future dom elements
document.addEventListener('click', (e) => {
    if (e.target.matches('img') && e.target.closest('#trashcanImg')) {
        const deletedImg = e.target.dataset.id
        const updatedTodoList = currentProject.todoStorage.filter(todoItem => todoItem.todoID !== deletedImg); //returns an ARRAY everything else but the deleted todo
        //mutate the currentProject.todoStorage into the array that's in updatedTodoList
        currentProject.todoStorage = currentProject.todoStorage.filter(todoItem => todoItem.todoID !== deletedImg); 
        saveToStorage("projects", projectObjects); //so localStorage matches the new data after deleting
        todoContainer.replaceChildren()
        displayTodo(currentProject)
    } 
    //deleting a specific proj
    else if (e.target.matches('img') && e.target.closest('#trashcanImgProject')) {
        const displayProjectBox = document.querySelector(".navLinks");
        const deletedImg = e.target.dataset.id
        projectObjects = projectObjects.filter(projectObject=> projectObject.projectID !== deletedImg); //reassign projectObjects as the filtered result
        saveToStorage("projects", projectObjects); //so localStorage matches the new data after deleting

        displayProjectBox.replaceChildren(displayProjectBox.firstElementChild) //keeps the btn
        displayProject(projectObjects)
        //this should also delete the options in the new todo form | delete the option that matches the title
        const deletedOption = e.target.value
        const projectOptions = document.getElementById("selectProjectInput");
        projectOptions.querySelector(`option[value = "${deletedOption}"]`).remove();
        //all the todos in the display should also be deleted/cleared
        todoContainer.replaceChildren()
        displayInstructions()
    }
})

//write a func that saves projects n todos data to localStorage everytime sth is created
function saveToStorage (key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

//another func that looks for data in localStorage when app is first loaded
function getFromStorage (key) {
    const storedObjects = JSON.parse(localStorage.getItem(key));
    console.log(storedObjects);
    console.log(storedObjects[0].todoStorage)
    return storedObjects //so i can access
}

projectObjects = getFromStorage("projects"); //REASSIGN and restore past saved data after refresh so click events can find projects
if (projectObjects) {
    displayProject(projectObjects)
    loadSavedProjects() //wait for the projectObjects to retrieve data first, this should run before displayTodo() or else it'll never reach it cus undefined
    displayTodo(currentProject) //earlier this was undefined cus its waiting for a click event to fire
}

function loadSavedProjects(){
    const projectOptions = document.getElementById("selectProjectInput");
    projectObjects.forEach((project) => {
        const reloadOptions = document.createElement('option');
        reloadOptions.value = project.projectTitle;
        reloadOptions.textContent = project.projectTitle;
        projectOptions.appendChild(reloadOptions);
    });
}