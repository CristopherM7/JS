"use strict"

/* mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario */

var numero1 = parseInt(prompt("introduce el primer numero",0));
var numero2 = parseInt(prompt("introduce el segundo numero",0));

while(numero1 < numero2){
        numero1++;
     if(numero1%2 !=0){
        console.log("el "+ numero1+ "es impar");
     }
}

