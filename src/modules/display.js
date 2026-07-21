//display projects
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

    const checkboxBtn = document.createElement('input'); 
    checkboxBtn.type = 'checkbox';
    checkboxBtn.className = 'todoCheckbox';
    checkboxBtn.dataset.id = todoItem.todoID;
    
    const todoTitle = todoItem.title; 
    const displayTodoTitle = document.createElement("p");
    displayTodoTitle.textContent = todoTitle;
    displayTodoTitle.dataset.id = todoItem.todoID

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

//display todo items in a project everytime a specific project Object is clicked
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

//reading the checkbox state, event delegation (put listner on parent container)
todoContainer.addEventListener('change', (e) => {
    const checkedbox = e.target.closest('input[type="checkbox"]');
    const crossedout = document.querySelector(`p[data-id="${checkedbox.dataset.id}"]`) //get the first p with the same dataset.id as the checkedbox

    if (checkedbox.checked) {
        crossedout.style.textDecoration = 'line-through'
    } else {
        crossedout.style.textDecoration = 'none'
    }
    //BUG: everytime display is refreshed, find a way to keep the checkbox display intact
})


