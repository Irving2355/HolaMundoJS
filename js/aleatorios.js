var aleatorios = document.querySelector("#aleatorio");
var numero = 0;

/*
Math.random = 0 y 1 
Math.floor = redondea al numero menor
Math.ceil = redondea al numero mayor
Math.round = redondea al numero 
*/

numero = Math.round(Math.random()*100);

aleatorios.innerHTML = numero;