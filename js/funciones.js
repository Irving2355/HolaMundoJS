//variables globales

var globales;

//funciones sin parametro

//Declaracion

function saludo(){
    
    console.log("Hola");
    
}

var a = 1;
var b = 2;
var c = 3;

if(a<b||c){
    console.log("verdadero");
}else{
    console.log("Falso");
}


//Ejecucion 

saludo();

//funciones con parametro

function suma(valor1, valor2){
    
    var resultado = valor1 + valor2;
    
    console.log("resultado",resultado);
    
}

suma(5,7);
suma(5,10);

//Funciones sin parametro y con retorno

function reotorno1(){
    var numero = true;
    return numero;
}

console.log("retorno1",reotorno1());

//Funciones con parametro y con retorno

function reotorno2(valor1,valor2){
    var res = valor1 + valor2;
    globales = res;
    return res;
}

console.log("retorno2",reotorno2(10,30));

console.log(globales);
