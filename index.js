//FUNCTION TO CREATE A PROJECT ELEMENT
let createProject = (parent, title, picture, desc) => {
    console.log(parent);
    let proj = document.createElement("div");
    parent.appendChild(proj);

    let projTitle = document.createElement("h2");
    proj.appendChild(projTitle);

    projTitle.textContent = title;


}

let body = document.querySelector("body");

//MAIN HEADER
let mainHeader = document.createElement("h1");
//giving a class name to h1
mainHeader.classList.add("mainHeader");
mainHeader.textContent = "Group Projects";
body.appendChild(mainHeader);


//LIST OF PROJECTS
let list = document.createElement("ul")
list.classList.add("projList");
body.appendChild(list);

let listitem = document.createElement("li");
list.appendChild(listitem);
createProject(listitem, "CS2063 - Intro to Android Development", 1, 1);



