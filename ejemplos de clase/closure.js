
'use strict';

function creaClosure (valor){
    return function(){
        return valor;
    }
}

//la funcion que esta devolviendo tiene acceso al contexto todas las variavbles
//dentro de creaClosure son accesibles para la funcion que esta dentro


function creaVehiculo(nombre){
    //contexto: de principio la variable nombre
    const numRuedas=4;
    return{
        getNombre: function(){
            return nombre;
        },
        setNombre: function(valor){
            nombre=valor;
        },
        saluda: function(){
            console.log('Hola soy '+ nombre, ' y tengo '+ numRuedas+ ' ruedas');
        }
    }
}

const seat = creaVehiculo('Seat');
console.log (seat);

console.log(seat.getNombre());

seat.saluda();

setTimeout(seat.saluda,2000);

