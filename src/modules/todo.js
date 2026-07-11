const newTodoBtn = document.getElementById("newTodoBtn"); 
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
    //for testing: | TO ADD: checklist, edit todo, sort by priority
    console.log("your label is:" + title)
    console.log("your priority is:" + priority)
    console.log("your description is:" + description)
    console.log("your due date is:" + dueDate)

    return {title, dueDate, priority, description}
}
