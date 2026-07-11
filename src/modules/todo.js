const newTodoBtn = document.getElementById("newTodoBtn"); //make this in the bottom right of the page
const submitBtn = document.getElementById("submitBtn"); 
const closeBtn = document.getElementById("closeBtn");

newTodoBtn.addEventListener("click" , (e) =>{
    e.preventDefault();
    dialog.showModal();
});

submitBtn.addEventListener("click", ()=> {
    //click, then it closes dialog and submits form. the rendering is done when u submit the form!
    dialog.close()
})

closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close()
})


function createTodo (title , dueDate, priority, description) {
    console.log("your label is:" + title)
    console.log("your priority is:" + priority)
    console.log("your description is:" + description)
    console.log("your due date is:" + dueDate)
}

//make the "project" and "todo" in seperate modules, then write a func to render display
//finish functionalities first, then in index.js u combine them together!