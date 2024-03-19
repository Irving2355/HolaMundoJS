var recuadro = document.querySelector("#evento");

function cambiarColor(){
    recuadro.style.background = "red";
    recuadro.style.width = "200px";
    recuadro.style.transition = "1s background ease"; 
}

var boton = document.querySelector("#boton");

boton.addEventListener("click", mover);

function mover(){
    recuadro.style.background = "green";
    recuadro.style.width = "600px";
    recuadro.style.transition = "1s"; 
}