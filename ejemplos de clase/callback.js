'use strict';

function suma (a,b, instrucciones){
    const resultado = a+b;
    instrucciones(resultado);
    
}

console.log(suma(2,5, function(resultado){
    console.log(resultado);
}));