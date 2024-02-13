'use strict';

/*
function Fruta(nombre){
    this.nombre=nombre;
    this.saluda = function(){
        console.log('Hola, soy ' + this.nombre);
    }

}

const limon = new Fruta('Limon');
*/
//JS busca el primer punto a la izquierda de los parentesis de ejecucion
// y lo que haya a la izquierda de ese punto lo usa como this
//limon.saluda();

//aqui no estan los parentesis porque queremos que ejecuta la funcion no el resultado de esa funcion
//setTimeout(limon.saluda.bind(limon),2000);
//todas las funciones tienen un metodo bind que crea otra funcion y podemos unir una copia con el this pegado


//const saludoDelLimon=limon.saluda.bind(limon);
//saludoDelLimon(); 
//da error pero podemos bindear


function Fruta(nombre){
    this.nombre=nombre;
    this.saluda = function(saludo){
        console.log(saludo, ', soy ' + this.nombre);
    }

}

const limon = new Fruta('Limon');

setTimeout(limon.saluda.bind(limon, 'Tocomocho'),2000);


const coche = {
    nombre:'Renault'
}
//le linkamos el this de otro objeto
limon.saluda.call(coche, 'Salut');

//apply funciona se pasan los argumentos con un array
limon.saluda.apply(coche,['Salut2']);