//this is where u would dynamically display the todos and 'projects' in the nav
//u're only adding the display to the things stored inside the array of objects

const displayProjectBox = document.querySelector(".navLinks");

function displayProject (projectTitle) { 
    const displayProjectTitle = document.createElement("li");
    displayProjectTitle.textContent = projectTitle

    displayProjectBox.appendChild(displayProjectTitle);
}

export {displayProject, displayProjectBox}

//display todo objects stored in a specific project array

const todoContainer = document.getElementById("todoContainer");

function displayTodo (projectObject) {
    projectObject.todoStorage.forEach((todoItem) => { 
    const displayTodoBox = document.createElement("div");
    displayTodoBox.className = "displayTodoBox"
    
    const todoTitle = todoItem.title; 
    const displayTodoTitle = document.createElement("p");
    displayTodoTitle.textContent = todoTitle;

    const todoDate = todoItem.dueDate;
    const displayTodoDate = document.createElement("p");
    displayTodoDate.textContent = todoDate;

    const todoProject = todoItem.selectProject;
    const displayTodoProject = document.createElement("p");
    displayTodoProject.textContent = todoProject;

    //ure gna append other p's or divs thats gonna exist inside each todoBox. 
    displayTodoBox.appendChild(displayTodoTitle);
    displayTodoBox.appendChild(displayTodoDate);
    displayTodoBox.appendChild(displayTodoProject);

    todoContainer.appendChild(displayTodoBox);
    })
}


export {displayTodo, todoContainer}

/*
import {projectObjects} from "../index.js" //go up a folder
import {createProject} from "./project.js";

const getClickedProject = document.querySelector("ul");
getClickedProject.addEventListener("click", (e) => {
    const clickedProject = e.target.textContent
    const matchedProject = projectObjects.find(project => project.projectTitle === clickedProject);
    
    todoContainer.replaceChildren()
})
*/
