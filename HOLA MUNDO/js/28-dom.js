"use strict"

//DOM -Document object Model

function cambiacolor(color)
{
    caja.style.background = color;
}

// conseguir elementos con un id concreto


var caja = document.getElementById("micaja");

caja.innerHTML ="!texto en la caja desde js!";
caja.style.background = "red";
caja.style.padding= "40px";
caja.style.color = "white";
caja.className = "hola";

console.log(caja);

//conseguir elementos por su etiqueta 
var todoslosdivs = document.getElementsByTagName("div")



var valor;
for(valor in todoslosdivs){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todoslosdivs[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("miseccion").appendChild(parrafo);
}

//conseguir elementos por su clase css