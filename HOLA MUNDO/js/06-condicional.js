"use strict"

//condicional IF
//Si A es igual a B entonces haz algo
/*var edad1 = 30;
var edad2 = 12;

//si pasa esto 
 if(edad1 < edad2 ){
   //ejecuta esto
   console.log("edad uno es mayo que edad dos");
 }else{
     console.log("la edad uno es inferior")
 }
 */

 var edad = 25;
 var nombre = "cristopher morales";
 /*
 //operadores relacionales 
     mayor o igual : >=
     menor o igual: <=
     igual ==
     distinto: !=
*/

 if(edad >= 24 ){
    console.log("el usuario "+ nombre + " es mayor de edad con " + edad + " años");
        if(edad <=23){
        console.log("todavia eres millenial");
    }else if(edad >= 70){
        console.log("eres anciano");
    }else{
        console.log("ya no eres millenial")
    }
        

}else{
    console.log("el usuario "+ nombre + " es menor de edad con " + edad + " años");
 }

 /*
 //Operadores Logicos 
 AND(Y):&&
 OR(O): ||
 NEGACION : !
*/
var year = 2023;
//NEGACION

if(year != 2016){
    console.log("el año no es 2016 realemente es "+year);
}

//AND
if(year >= 2000 && year <= 2030){
    console.log("estamos en la era actual");

}else{
    console.log("estamos en la era pos moderna ");
}

//OR
if(year == 2013 || (year >= 2023 && year == 2033)){
    console.log("el año acaba en 3");

}else{
    console.log("AÑO NO REGISTRADO");
}