"use strict"

/* que nos diga si un numero es par o impoar
1.ventana prompt
2.si no es valido que nos pida de nuevo el numero*/


var numero1 = parseInt(prompt("ingresar numero",0));

while(isNaN(numero1)){
    alert("datos invalidos,intenta de nuevo");
    numero1 = parseInt(prompt("ingrese numero 1"));
}
if(numero1%2 !=0){
    alert("el "+ numero1+ "es impar");
}else{alert("el "+numero1+ " es par")

}