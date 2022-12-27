const menu = document.getElementById("menu");

function menuOpen() {

    if (menu.style.left == "-100vw") {
        menu.style.left = "0";
    } else {
        menu.style.left = "-100vw";
    }

}


const menuPerfil = document.getElementById("menuPerfil");

function opcoes() {
    if (menuPerfil.style.visibility == "hidden") {
        menuPerfil.style.visibility = "visible";
    } else {
        menuPerfil.style.visibility = "hidden";
    }
}