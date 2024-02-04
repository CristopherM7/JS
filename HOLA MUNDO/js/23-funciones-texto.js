"use strict"

//transformacion de textos

var numero = 444; 
var texto1= "bienvenido al curso de javascript de victor robles";
var texto2= "es muy buen curso";

/*var dato = numero.toString();
    dato = texto1.toUpperCase();
    dato = texto2.toLowerCase();
console.log(dato);

// calcular longitud 
var nombre = "victor robles";
    nombre = ["hoa","hola"];

console.log(nombre.length);

//concaternar -unir textos 

//var TextoTotal = texto1+texto2;
var TextoTotal = texto1.concat(" "+texto2);
console.log(TextoTotal);*/
/*FUNCIONES DE BUSQUEDA
indexof , search,substr(parametros),
chartAT(NUMERO CONCRETO DEL STRING)
 match(te da mucho mas informacion), 
startWith,endsWith, 
includes (te dira si encontro la palabra en true o false), */
/*FUNCIONES DE REEMPLAZO
replace (cambias una palabra), 
slice (separar las palabras poniendo el numero de caracter para comenzar y hasta para poner limites)
split(lo guarda en un array si haces ("")eso hara que separe las palabras guardando en un array a cada una)
trim(recortar los espacios que hay al inicio y al final )
*/
var busqueda = texto1.indexOf("curso");
console.log(busqueda);

