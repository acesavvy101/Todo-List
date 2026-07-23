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
    displayTodoTitle.dataset.id = todoItem.todoID;

    if (todoItem.completed === true) {
        displayTodoTitle.style.textDecoration = 'line-through'
    } else {
        displayTodoTitle.style.textDecoration = 'none'
    }

    const todoDate = todoItem.dueDate;
    const displayTodoDate = document.createElement("p");
    displayTodoDate.textContent = todoDate;

    const todoProject = todoItem.selectProject;
    const displayTodoProject = document.createElement("p");
    displayTodoProject.textContent = todoProject;

    const deleteBtn = document.createElement("img");
    deleteBtn.src = trashcanIcon;
    deleteBtn.id = "trashcanImg";

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

function displayCrossedout (todoTitle) {
    todoTitle.style.textDecoration = 'line-through'
}

function displayNotCrossedout(todoTitle) {
     todoTitle.style.textDecoration = 'none'
}
export {displayCrossedout, displayNotCrossedout}