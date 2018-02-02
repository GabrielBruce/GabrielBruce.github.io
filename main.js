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