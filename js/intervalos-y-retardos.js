var tiempo = document.querySelector("#tiempo");
var segundos = 0;

/*
SET INTERVAL  
setInterval(funcion,tiempo);
*/

var cronometro = setInterval(function(){
    segundos++;
    
    tiempo.innerHTML = segundos;
},1000);

/*
setTimeout(funcion,tiempo);
*/

setTimeout(function(){
    //alert("Se cumplio el tiempo");
    clearInterval(cronometro);
},5000);




