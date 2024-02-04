"use strict"

//parametros REST Y SPREAD

function listadofrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("fruta 1:", fruta1);
    console.log("fruta 2:", fruta2);
    console.log(resto_de_frutas);
}   

listadofrutas("naranja","manzana","sandia","pera","melon","coco");

var frutas = ["naranja", "manzana"]
listadofrutas(...frutas,"sandia","pera","melon","coco");