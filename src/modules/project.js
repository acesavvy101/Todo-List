const newProjectBtn = document.getElementById("newProjectBtn");
const projectSubmitBtn = document.getElementById("projectSubmitBtn"); 
const projectCloseBtn = document.getElementById("projectCloseBtn");

newProjectBtn.addEventListener("click", ()=> {
    projectDialog.showModal();
})

projectSubmitBtn.addEventListener("click", ()=> {
    //click, then it closes dialog and submits form. the rendering is done when u submit the form!
    projectDialog.close()
    console.log("the new project is")
})

projectCloseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    projectDialog.close()
})

//HERE SHOULD CONTAIN THE LOGIC TO STORE THESE TODOS SO THAT I CAN CALL JSON ON IT AND STORE IN A LOCAL STORAGE!
function createProject (projectTitle) {
    //each project should have its own set of todo "storage"
    let todoStorage = [];

    return {
        projectTitle,
        todoStorage //this should contain new objects pushed in storeTodo 
    }
}

function storeTodo (projectTitle, todoObject) { 
    projectTitle.todoStorage.push(todoObject)  //add the todoObject inside the todoStorage
}

//so later when u make a new todo instance like:
/*const todo1 = createTodo(mathsHw, 2026/01/01, high, chulio's hw) 
u can pass in this instance as an argument like:
const project1 = createProject ("School")
const storeTodo1 = (project1 , todo1)
then the todo1 will be stored as an object inside the todoStorage array created for every project
*/
