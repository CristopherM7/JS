"use strict"

//Pruebas con let y var

//prueba con var
var numero= 40;
console.log(numero);//valor 40

if(true){
    var numero= 50;
    console.log(numero);//valor 50
}

console.log(numero);//valor 50

//prueba con let

var texto = "curso 3 percymorales.pe";
console.log(texto);//valor

if(true){
    let texto = "curso laravel 5 percymorales.pe";
    console.log(texto);// valor laravel 5
}

console.log(texto);