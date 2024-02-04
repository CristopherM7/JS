"use strict"

//arrays multidimensionales , array dentro de otra array

var categorias = ["accion", "terror","comedia"];
var pelicula = ["la verdad duele" , "la vida es bella", "taxi driver"];
//ordenar
/*pelicula.sort();
pelicula.reverse();*/
console.log(pelicula);
var cine = [categorias,pelicula];


//console.log(cine[1][3]);
/*
var elemento = "";
do {
    elemento = prompt("introduce tu pelicula:");
    pelicula.push(elemento);
}
while(elemento != "acabar"){
   
}
pelicula.pop();*/

//añadir variables

var indice = pelicula.indexOf("acabar");
if(indice > -1){
    pelicula.splice(indice,1);
}
 
var pelicula_string = pelicula.join();
//convertir string a array
var cadena = "texto1,texto2,texto3";
var cadena_array = cadena.split(",")

console.log(cadena_array);


