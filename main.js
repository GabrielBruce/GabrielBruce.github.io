function navMenu(){
    var icon = document.getElementById("dropdown-icon");
    var menu = document.getElementById("dropdown-menu");
    if (menu.className == ("")){
        menu.className += " responsive";
        icon.innerHTML = "&#9650";
    }
    else {
        menu.className = "";
        icon.innerHTML = "&#9660";
    }
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