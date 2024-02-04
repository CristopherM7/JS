"use strict"

//arrays o arreglos o matrices

var nombre = "victoria robles";
var nombres = ["pepe", "cristiano ","ramos",48,true];

var lenguajes = new Array( "PHP","JS","PYTHON","JAVA","C#","C", "PASCAL");

/*
var elemento = parseInt(prompt("que elemento del array quieres?",0));
if(elemento >= nombres.length){
 alert("introduce el numero correcto menor que "+nombres.length);
}else{
    alert("el usuario seleccionado es:"+nombres[elemento]);
}
*/


document.write("<h1>lenguajes de programacion del 2023</h1>");
document.write("<ul>");

/*
for(var i = 0 ; i < lenguajes.length;i++){
    document.write("<li>"+lenguajes[i]+"</li>");

}
document.write("</ul>");;
*/
/*
lenguajes.forEach((elemento,indice,arr)=>{
    document.write("<li>"+indice+"  -  "  +elemento+"</li>");
}); */

for(let cualquiervalor in lenguajes){
    document.write("<li>"+lenguajes[cualquiervalor]+"</li>");
}
document.write("</ul>");


//busquedas de un array


var busqueda = lenguajes.find(cualquiervalor => cualquiervalor == "PHP");
    


console.log(busqueda);

/* var precio= [10,20,64,12 ]
var busqueda = precio.some(precio => precio > 80);
console.log(busqueda);*/
