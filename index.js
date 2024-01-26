//FUNCTION TO CREATE A PROJECT ELEMENT
let createProject = (title, picture, desc) => {

    let proj = document.createElement("div");
    
    let projTitle = document.createElement("h2");
    proj.appendChild(projTitle);
    projTitle.textContent = title;

    let projImg = document.createElement("div");
    displayImages(projImg, picture);

    projImg.onscroll = () => {
        rotateImage(projImg);
        console.log("called");
    }
    proj.appendChild(projImg)

    let projDesc = document.createElement("p");
    projDesc.textContent = desc;
    proj.appendChild(projDesc);

    return proj;
}

//ROTATING PICTURES
function getRotation(input) {
    let totalWidth = window.innerWidth;
    let rect = input.getBoundingClientRect();
    let x = rect.left + rect.width / 2; //x is the position of the element
    if (x > 0.45 * totalWidth && 0.55 * totalWidth > x) {
        return ''
    }
    else if (x < 0.2 * totalWidth || totalWidth * 0.8 < x) {
        return 'rotate3d(-.1, 1, 0, -90deg)'
    }
    else if (x < 0.45 * totalWidth) {
        x = x - 0.2 * totalWidth;
        let deg = x / (0.3 * totalWidth) * 100;
        deg = (90 - deg);
        return `rotate3d(0, 1, 0, ${deg}deg)`;
    }
    else {
        //x position relative to the cut left edge
        x = x - 0.8 * totalWidth;
        let deg = x / (0.3 * totalWidth) * 100;
        deg += 90;
        return `rotate3d(0, 1, 0, ${deg}deg)`;
    }

}

function rotateImage (parent) {

    let children = parent.children;
    for (let i = 0; i < children.length; i++){
        children[i].style.transform = getRotation(children[i]);
    }
}

//FUNCTION TO DISPLAY THE IMAGES IN THE PROJECT ELEMENT
let displayImages = (parent, imgList) => {

    parent.classList.add("images");
    //creating image out of string path
    for (i = 0; i < imgList.length; i++) {
        let image = document.createElement("img");
        image.setAttribute('src', imgList[i]);
        image.setAttribute('height', '350px');
        image.setAttribute('width', '450px');
        image.setAttribute('object-fit', 'contain');
        parent.appendChild(image);
    }

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
let title = ["SWE4103 - Software Quality and Project Management"] //"CS2063 - Intro to Android Development", "TME 3313 - Managing Engineering and IT Projects","CS2043 - Software Engineering I"];
let ischesule = ["./images/iSchedule/loginpage.PNG", "./images/iSchedule/AdminLogin.PNG", "./images/iSchedule/Create-a-school.PNG", "./images/iSchedule/Teacher-on-calls.PNG",
                "./images/iSchedule/Table.PNG", "./images/iSchedule/vp-homepage.PNG"];

//CREATING AND APPENDING PROJECT ELEMENTS
for(i = 0; i < title.length; i++ ){
    let listitem = document.createElement("li");
    list.appendChild(listitem);

    let listDiv = document.createElement("div");
    listDiv = createProject(title[i], ischesule, 1);
    listitem.appendChild(listDiv);

}




