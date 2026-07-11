//this is where u would dynamically display the todos and 'projects' in the nav
//u're only adding the display to the things stored inside the array of objects

//create a new project li , and append inside .navLinks


const displayProjectBox = document.querySelector(".navLinks");


function displayProject (projectTitle) { 
    const displayProjectTitle = document.createElement("li");
    displayProjectTitle.textContent = projectTitle

    displayProjectBox.appendChild(displayProjectTitle);
}

export {displayProject, displayProjectBox}



