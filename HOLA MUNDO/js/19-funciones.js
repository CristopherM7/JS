"use strict"

//funciones
// una funcion es una agrupacion reutilizable de un conjunto de instrucciones


function porconsola(numero1,numero2){
    console.log("suma: "+ (numero1+numero2));
    console.log("resta: "+ (numero1-numero2));
    console.log("multtiplicacion: "+ (numero1*numero2));
    console.log("division : "+ (numero1/numero2));
}

function porpantalla(numero1,numero2){
    document.write("suma: "+ (numero1+numero2));
    document.write("resta: "+ (numero1-numero2));
    document.write("multtiplicacion: "+ (numero1*numero2));
    document.write("division : "+ (numero1/numero2));

}
//define la funcion
function calculadora(numero1,numero2, mostrar = false){
    //conjunto de instruciones a ejecutar 
   if(mostrar == false) {
    
    porconsola(numero1,numero2);
}else{
    porpantalla(numero1,numero2);





}
return true;
    //return "hola soy la calculadora";
}
 


//invocar o llamar a la

calculadora(1,4);
calculadora(2,5,true);
/*calculadora(parseInt(prompt()),parseInt(prompt()));*/


/*

for(var i=1 ; i<= 10;i++){
    console.log(i);
    calculadora(i,8)
}*/