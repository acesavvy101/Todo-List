//webpack runs from index.js so i have to import everything here
import "./style.css"; 
import "./template.html";
import "./modules/todo.js"

//move this to index.js as it combines both the appLogic and displayLogic:
const todoForm = document.getElementById("newTodo");

todoForm.addEventListener('submit', function(e) {
    e.preventDefault(); //prevent reloading
    
    const todoTitle = document.getElementById("titleInput").value;
    const todoDate = document.getElementById("dueDateInput").value;
    const todoPriority = document.getElementById("priorityInput").value;
    const todoDescription = document.getElementById("descriptionInput").value;

    createTodo(todoTitle, todoDate, todoPriority, todoDescription); //pass in the input values into the parameter

        //display the todo after submitting the form
})