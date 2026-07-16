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
    const displayTodoBox = document.createElement("div");
    displayTodoBox.id = "displayTodoBox"

    const todoTitle = projectObject.todoStorage.map(todoItem => todoItem.title);

    const displayTodoTitle = document.createElement("p");
    displayTodoTitle.textContent = todoTitle;

    const todoDate = projectObject.todoStorage.map(todoItem => todoItem.dueDate);
    const displayTodoDate = document.createElement("p");
    displayTodoDate.textContent = todoDate;

    //ure gna append other p's or divs thats gonna exist inside each todoBox. 
    displayTodoBox.appendChild(displayTodoTitle);
    displayTodoBox.appendChild(displayTodoDate);

    todoContainer.appendChild(displayTodoBox);
}

export {displayTodo, todoContainer}

