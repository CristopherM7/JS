"use strict"

/*
Progama que pida dos numeros y que nos diga cual es el mayor , el menor y si son iguales
PLUS= Si los numeros no son un numero o son menores o iguales a cero, nos lo vuelva a pedir*/


/*var numero1 = parseInt(prompt("ingrese numero 1"));
var numero2 = parseInt(prompt("ingrese numero 2"));


while(numero1 <=0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){
    alert("datos invalidos,intenta de nuevo");
    numero1 = parseInt(prompt("ingrese numero 1"));
    numero2 = parseInt(prompt("ingrese numero 2"));

    }*/
    var numero1 = parseInt(prompt("ingrese numero 1"));
    while(numero1 <=0 || isNaN(numero1) ){
        alert("datos invalidos,intenta de nuevo");
        numero1 = parseInt(prompt("ingrese numero 1"));}
    var numero2 = parseInt(prompt("ingrese numero 2"));
    while(numero2 <=0 || isNaN(numero2) ){
        alert("datos invalidos,intenta de nuevo");
        numero2 = parseInt(prompt("ingrese numero 2"))}

if(numero1 == numero2){
   alert("LOS NUMERO SON INGUALES");
}else if(numero1>numero2){
    alert("el numero mayor es: "+numero1);
    alert("el numero menor es: "+numero2);
}else if(numero2>numero1){
    alert("el numero mayor es: "+numero2);
    alert("el numero menor es: "+numero1);
}else{
    alert("introduce numeros correctos");
} 

