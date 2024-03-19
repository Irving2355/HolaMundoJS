for(var i=1; i<=5; i++){
    console.log("indice:",i);
}

var cajas = document.querySelectorAll("#variascajas");

console.log(cajas);

for(var i=0; i<cajas.length; i++){
    cajas[i].style.width= "50px";
    cajas[i].style.height= "50px";
    cajas[i].style.background= "blue";
    cajas[i].style.marginTop= "5px";
}