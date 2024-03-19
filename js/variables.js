//Variables

var numero = 55;
var numeroDos;

numeroDos = 22;

console.log("Mi numero 1 es: ", numero);

var texto = "Irving";

console.log("Mi variable texto tiene", texto);

var boleana = false;

console.log("Bool", boleana);

//Variables vector o array

var vector = ["rojo","azul","lila"];

console.log("Vector",vector[1]);

//Variables tipo objeto

var colores = {
    color1: "Rojo claro",
    color2: "Blanco",
    color3: "Negro",
    color4: "Gris"
}

console.log("Objeto colores", colores.color3);


/*
Variables DOM (Modelo de objetos del documento)
El DOM es la estructura de objetos que genera el navegador
cuando se carga un documento y se puede alterar mediante 
JavaScript para cambiar dinamicamente los contenidos 
y aspectos de la pagina.
*/

var caja = document.querySelector(".caja");

console.log("caja",caja);

caja.style.width= "200px";
caja.style.height= "200px";
caja.style.background= "red";

var cajas = document.querySelectorAll("#variascajas");

console.log("cajas",cajas);






