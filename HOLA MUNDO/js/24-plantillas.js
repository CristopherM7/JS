"use strict"

// plantillas de textp 

var nombre = prompt("METE TU NOMBRE");
var apellido = prompt ("METE TUS APELLIDOS");

//var texto = " mi nombre es : " + nombre+ " mis apellidos son : "+apellido;
var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es : ${nombre}</h3>
    <h3>Mis apellidos son : ${apellido}</h3>

`;
    

document.write(texto);