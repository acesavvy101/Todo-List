const todoForm = document.getElementById("newTodo");

//basically we will onl set the input as the parameter if we submit the form, the problem is idk how to submit the form
todoForm.addEventListener('submit', function(e) {
    e.preventDefault(); //prevent reloading
    
    const todoTitle = document.getElementById("titleInput").value;
    const todoDate = document.getElementById("dueDateInput").value;
    const todoPriority = document.getElementById("priorityInput").value;
    const todoDescription = document.getElementById("descriptionInput").value;

    todo(todoTitle, todoDate, todoPriority, todoDescription); //pass in the input values into the parameter

        //display the book after submitting the form
})

const newTodoBtn = document.getElementById("newTodoBtn");
const submitBtn = document.getElementById("submitBtn");
const closeBtn = document.getElementById("closeBtn");

newTodoBtn.addEventListener("click" , (e) =>{
    e.preventDefault();
    dialog.showModal();
});

closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close()
})


function todo (title , dueDate, priority, description) {
    /*  title = todoTitle.value
    dueDate = todoDate
    priority = todoPriority
    description = todoDescription */

    console.log("your label is:" + title)
}

//for the project, make a dialog with only the title input