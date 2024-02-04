"use strict"


//funciones anonimas
//funcion que no tiene nombre

/*var pelicula = function(nombre){
    return "la pelicula es: "+ nombre;
}*/

//callback dato =>

function sumame(numero1,numero2,sumaYmuestra,sumaPorDos){
     var sumar = numero1+numero2;

     sumaYmuestra(sumar);
     sumaPorDos(sumar);
  return sumar;
}


    sumame(5,7,function(dato){
        console.log("la suma es: ",dato );
    },
    function(dato){
        console.log("la suma por dos : ",(dato*2));

    }
    )



