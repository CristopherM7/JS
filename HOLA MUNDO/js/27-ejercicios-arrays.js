"use strict"

/*
1.pida 6 numero por pantalla y los meta en un array
2.mostrar el array entero / todos los elementos en el cuerpo de la pagina y en la consola
3.ordenar y mostrarlo 
4. invertir su orden y mostralo 
5.mostrar cuantos elementos tiene el array
6. busqeuda de un valor introducido por el usuario , que nos diga si lo encuentr y su indce

*/

function mostrarArray(elemento,textoCustom = ""){
    document.write("<h1>contenido del array "+textoCustom+"</h1>");
    document.write("<ul>");
numeros.forEach((elemento,index) => {
    document.write("<li>"+elemento+"</li>")
    
});
document.write("</ul>");
}
// pedir 6 numeros
var numeros = new Array(6)


for(var i = 0;i < 6;i++){
    numeros.push(parseInt(prompt("introduce un numero",0)));
}

//mostrar en el cuerpo de la pagina
mostrarArray(numeros);
//mostrar array en la consola
console.log(numeros);

//ordenar y mostrarlo 
numeros.sort(function(a,b){return b-a});
mostrarArray(numeros,'ordenado');

//invertir y mostrarlo 
numeros.reverse();
mostrarArray(numeros,'revertido');

//contar elementos
document.write("<h1>El array tiene "+numeros.length+" elementos");

//buscar de un valor 
var busqueda = parseInt(prompt("busca un numero",0));

var posicion = numeros.findIndex( numero => numero == busqueda);

if(posicion && posicion != -1){

document.write("<hr/><h1>ENCONTRADO</h1>")
document.write("<h1>posicion de la busqueda: "+posicion+"</h1>")
}else{
    document.write("<hr/><h1>NO ENCONTRADO</h1>")
}