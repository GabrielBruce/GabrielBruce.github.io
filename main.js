function navMenu(){
    var icon = document.getElementById("dropdown-icon");
    var menu = document.getElementById("dropdown-menu");
    if (menu.className == ("")){
        menu.className += " responsive";
        icon.style.setProperty("bottom", "2px");
        icon.style.setProperty("top", "auto");
        icon.innerHTML = "&#9650";
    }
    else {
        menu.className = "";
        icon.style.setProperty("top", "2px");
        icon.style.setProperty("bottom", "auto");
        icon.innerHTML = "&#9660";
    }
}