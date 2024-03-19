var a = 5;
var b = 10;


if(a > b){
    console.log("a es mayor que b");
}else if(a == b){
    console.log("a es igual que b");
}else{
    console.log("a es menor que b");
}

if(a < b){
    console.log("a es menor que b");
}

var dia = "martess";

switch(dia){
    case "sabado":
        imprimir();
    break;
    
    case "martes":
        imprimir();
    break;
    
    default: 
        console.log("demas dias");
}

function imprimir(){
    console.log("entro a la funcion");
    
    var caja = document.querySelector(".caja");

    console.log("caja",caja);

    caja.style.width= "200px";
    caja.style.height= "200px";
    caja.style.background= "red";
}



