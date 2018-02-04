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

function flip(face){
    if (face == 1){document.getElementById("cube").className = "show-front";}
    else if (face == 2){document.getElementById("cube").className = "show-back";}
    else if (face == 3){document.getElementById("cube").className = "show-right";}
    else if (face == 4){document.getElementById("cube").className = "show-left";}
    else if (face == 5){document.getElementById("cube").className = "show-top";}
    else if (face == 6){document.getElementById("cube").className = "show-bottom";}
}