"use strict"

/*
calculadora 
-pida dos numeros por pantalla
-si metemos uno mal los vuelva a pedir
-en el cuerpo de la pagina , en una alerta y por la consola el resultado de suma , restar,multiplicar y dividr esas dos cifras*/



var numero1 = parseInt(prompt("introduce el primer numero",0));
while(numero1 <=0 || isNaN(numero1) ){
    alert("datos invalidos,intenta de nuevo");
    numero1 = parseInt(prompt("ingrese numero 1"));}
var numero2 = parseInt(prompt("introduce el segundo numero",0));
while(numero2 <=0 || isNaN(numero2) ){
    alert("datos invalidos,intenta de nuevo");
    numero2 = parseInt(prompt("ingrese numero 2"))}

var resultado = "La suma es: "+(numero1+numero2)+" <br/>"+
                "La resta es: "+(numero1-numero2)+" <br/>"+
                "La multiplicacion es: "+(numero1*numero2)+" <br/>"+
                "La division es: "+(numero1/numero2)+" <br/>"
var resultado2 = "La suma es: "+(numero1+numero2)+" \n"+
                "La resta es: "+(numero1-numero2)+" \n"+
                "La multiplicacion es: "+(numero1*numero2)+" \n"+
                "La division es: "+(numero1/numero2)+" \n"

document.write(resultado);
console.log(resultado2);
alert(resultado2);

