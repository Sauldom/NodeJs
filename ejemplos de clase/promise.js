'use strict';


//funcion que devuelve una promesa, asi que lo primero es devolver la promesa
//las promesas son objetos

function sleep(tiempo){
    /*if (isNaN(Number(ms))){   se puede hacer un reject o un resolve de manera directa
        
        return Promise.reject();
    }*/
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(42);
            //podemos hacer que falle con reject si no pones codigo para manejarlo te lo pone appcrashed y te 
            //obliga a manejar el error.
            //reject('Error fatal');
        },tiempo)
    });
}

const promesa = sleep(2000);

console.log(promesa);
//con then es cuando la promesa haya acabado
//los .then se pueden encadenar añadimos con .then
promesa.then((resultado)=>{
    console.log('Han pasado 2 segundos y el resultado del resolve es : '+ resultado);
}).catch(err=>{
    //el error va en cascada y acabaria alli abajo
    //pero nos permite un mayor control
    console.log('fallo el primer sleep pero no me importa')
});
promesa.then((resultado)=>{
    console.log('Han pasado 2 segundosy  el resultado del resolve es : '+ resultado);
}).then(()=>{
    return sleep(2000);
}).then((resultado)=>{
    console.log('Han pasado otros 2 segundos y el resultado del resolve es : '+ resultado);
}).then(()=>{
    return sleep(2000);
}).then((resultado)=>{
    console.log('Han pasado otros dos segundos y el resultado del resolve es : '+ resultado);
    console.log('Y ya hemos acabado de encadenar promesas');
}).catch(error =>{
    console.log('Hubo un error: ', error);
})

//con promise.race devuelve en cuanto acabe la mas rapida
Promise.all([sleep(3000), sleep(2000), sleep(1000)]).then((resultados)=>{
    console.log(resultados);
})