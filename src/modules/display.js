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
import trashcanIcon from "../assets/trashcanIcon.svg"

function displayTodo (projectObject) {
    projectObject.todoStorage.forEach((todoItem) => { 
    const displayTodoBox = document.createElement("div");
    displayTodoBox.className = "displayTodoBox"

    const displayTodoTitleBox = document.createElement("div");
    displayTodoTitleBox.className = "displayTodoRight"

    const checkboxBtn = document.createElement('input'); //BUG: everytime display is refreshed, find a way to keep the checkbox display intact
    checkboxBtn.type = 'checkbox';
    checkboxBtn.id = 'todoCheckbox';
    checkboxBtn.value = 'done'; //when its done, turn the value to "done" to mark completed
    
    const todoTitle = todoItem.title; 
    const displayTodoTitle = document.createElement("p");
    displayTodoTitle.textContent = todoTitle;

    const todoDate = todoItem.dueDate;
    const displayTodoDate = document.createElement("p");
    displayTodoDate.textContent = todoDate;

    const todoProject = todoItem.selectProject;
    const displayTodoProject = document.createElement("p");
    displayTodoProject.textContent = todoProject;

    const deleteBtn = document.createElement("img");
    deleteBtn.src = trashcanIcon;
    deleteBtn.id = "trashcanImg"

    //ure gna append other p's or divs thats gonna exist inside each todoBox. 
    displayTodoTitleBox.appendChild(checkboxBtn);
    displayTodoTitleBox.appendChild(displayTodoTitle);
    displayTodoBox.appendChild(displayTodoTitleBox);
    displayTodoBox.appendChild(displayTodoDate);
    displayTodoBox.appendChild(displayTodoProject);
    displayTodoBox.appendChild(deleteBtn);

    todoContainer.appendChild(displayTodoBox);
    })
}
export {displayTodo, todoContainer}

import {projectObjects} from "../index.js" //go up a folder

const getClickedProject = document.querySelector("ul"); 
console.log(getClickedProject) //learning lesson: the fact that this log works means its not a selector error

getClickedProject.addEventListener("click", (e) => {
    if (e.target.textContent === "Add New Project") {
        //ignore clicks from a li element if its the add new proj btn
    } else {
    const clickedProject = e.target.textContent
    const matchedProject = projectObjects.find(project => project.projectTitle === clickedProject);
    //find a projectObject with the title is the same as clickedProject
    todoContainer.replaceChildren()
    displayTodo(matchedProject)
    }
})




