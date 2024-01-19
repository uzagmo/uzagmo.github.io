//FUNCTION TO CREATE A PROJECT ELEMENT
let createProject = (title, picture, desc) => {

    let proj = document.createElement("div");
    
    let projTitle = document.createElement("h2");
    proj.appendChild(projTitle);
    projTitle.textContent = title;

    let projImg = document.createElement("div");
    displayImages(projImg, picture);
    proj.appendChild(projImg)

    let projDesc = document.createElement("p");
    projDesc.textContent = desc;
    proj.appendChild(projDesc);

    return proj;
}

//FUNCTION TO DISPLAY THE IMAGES IN THE PROJECT ELEMENT
let displayImages = (parent, imgList) => {


}



//get the body
let body = document.querySelector("body");

//MAIN HEADER
let mainHeader = document.createElement("h1");
//giving a class name to h1
mainHeader.classList.add("mainHeader");
mainHeader.textContent = "Group Projects";
body.appendChild(mainHeader);


//LIST OF PROJECTS: structure : <li> <div> <h2> </> <img> </> <p> </> </div> </li> 
let list = document.createElement("ul")
list.classList.add("projList");
body.appendChild(list);

//DATA
let title = ["CS2063 - Intro to Android Development", "SWE4103 - Software Quality and Project Management", "TME 3313 - Managing Engineering and IT Projects","CS2043 - Software Engineering I"];


//CREATING AND APPENDING PROJECT ELEMENTS
for(i = 0; i < title.length; i++ ){
    let listitem = document.createElement("li");
    list.appendChild(listitem);

    let listDiv = document.createElement("div");
    listDiv = createProject(title[i], 1, 1);
    listitem.appendChild(listDiv);

}




