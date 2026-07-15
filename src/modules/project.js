const newProjectBtn = document.getElementById("newProjectBtn");
const projectSubmitBtn = document.getElementById("projectSubmitBtn"); 
const projectCloseBtn = document.getElementById("projectCloseBtn");

newProjectBtn.addEventListener("click", ()=> {
    projectDialog.showModal();
})

projectSubmitBtn.addEventListener("click", ()=> {
    //click, then it closes dialog and submits form. the rendering is done when u submit the form!
    projectDialog.close()
})

projectCloseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    projectDialog.close()
})

//HERE SHOULD CONTAIN THE LOGIC TO STORE THESE TODOS SO THAT I CAN CALL JSON ON IT AND STORE IN A LOCAL STORAGE!
function createProject (projectTitle) {
    //each project should have its own set of todo "storage"
    let todoStorage = [];

    //for every project created i also need to add it to the select project options
    const projectOptions = document.getElementById("selectProject");

    const newProjectOption = new Option(`${projectTitle}`, `${projectTitle}`);
    projectOptions.add(newProjectOption);

    return {
        projectTitle,
        todoStorage //this should contain new objects pushed in storeTodo 
    }
}

function storeTodo (projectTitle, todoObject) { 
    projectTitle.todoStorage.push(todoObject)  //add the todoObject inside the todoStorage
}

export {createProject,storeTodo}

