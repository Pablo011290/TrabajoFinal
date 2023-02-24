let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    document.getElementById("nav").classList ="";
    menuVisible = false;
}
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distance_habilidades = window.innerHeight = habilidades.getBoundingClientRect().top;
    if(distance_habilidades<=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("comunicacion");
        habilidades[1].classList.add("trabajo");
        habilidades[2].classList.add("creatividad");
        habilidades[3].classList.add("dedicacion");
        habilidades[4].classList.add("proyecto");
    }
}

window.onscroll = function(){
    efectoHabilidades();
}