function loaded(){
    document.getElementById("loading-container").classList.add("loaded");
    document.getElementById("loaded-wrapper").classList.add("loaded");
    setTimeout(function(){
        document.getElementById("loaded-wrapper").style.display = "none";
        document.getElementById("loading-container").style.display = "none";
    }, 5000)
    document.getElementById("cube-container").addEventListener("mouseover", function(){
        cubeButtonMenuLeft();
        cubeButtonMenuRight();
    })
    document.getElementById("cube-container").addEventListener("touchstart", function(){
        cubeButtonMenuLeft();
        cubeButtonMenuRight();
    })
}

setTimeout(loaded, 4000);

function navMenu(){
    var icon = document.getElementById("dropdown-icon");
    var menu = document.getElementById("dropdown-menu");
    if (menu.className == ("")){
        menu.className += " responsive";
    }
    else {
        menu.className = "";
    }
}

function closeNavMenu(){
    var icon = document.getElementById("dropdown-icon");
    var menu = document.getElementById("dropdown-menu");
    menu.className = "";
    icon.innerHTML = "&#9660";
}

function turn(val) {
    var face = document.getElementById(val + "-face");
    var cube = document.getElementById("cube");
    
    if (cube.className == ("turn-" + val) && face.classList.contains("flipped")){
        flip();
    }
    else {
        cube.className = "turn-" + val;
        if (face.classList.contains("flipped")){
            setTimeout(flip, 1500);
        }
    }
}

function turnFlip(val){
    var face = document.getElementById(val + "-face");
    var cube = document.getElementById("cube");
    
    if (cube.className == "turn-" + val && 
        face.classList.contains("flipped") == false){
        flip();
    }
    else if (face.classList.contains("flipped")){
        document.getElementById("cube").className = "turn-" + val;
    }
    else {
        document.getElementById("cube").className = "turn-" + val;
        setTimeout(flip, 1500);
    }
}

function flip() {
    var curFace = document.getElementById("cube").className;
    
    if (curFace == "turn-front") {
        document.getElementById("front-face").classList.toggle("flipped");}
    else if (curFace == "turn-back") {
        document.getElementById("back-face").classList.toggle("flipped");}
    else if (curFace == "turn-left") {
        document.getElementById("left-face").classList.toggle("flipped");}
    else if (curFace == "turn-right") {
        document.getElementById("right-face").classList.toggle("flipped");}
    else if (curFace == "turn-top") {
        document.getElementById("top-face").classList.toggle("flipped");}
    else if (curFace == "turn-bottom") {
        document.getElementById("bottom-face").classList.toggle("flipped");}
}

function cubeButtonMenuLeft(){
    var children = document.getElementById("cube-buttons-left").children;
    var i = 0;
    function open(){
        children[i].classList.add("cube-buttons-left-enter");
        i++;
        if (i < children.length){
            setTimeout(open, 100);
        }
    }
    open();
}

function cubeButtonMenuRight(){
    var children = document.getElementById("cube-buttons-right").children;
    var i = 0;
    function open(){
        children[i].classList.add("cube-buttons-right-enter");
        i++;
        if (i < children.length){
            setTimeout(open, 100);
        }
    }
    open();
}