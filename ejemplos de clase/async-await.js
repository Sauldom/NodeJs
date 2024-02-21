'use strict';

//async devuelve una promesa
//await consume la promesa, el codigo se para ahi hasta que se cumple la promesa
function sleep(tiempo){
   
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //resolve(42);
            reject('error fatal');
        },tiempo)
    });
}


async function main(){
    /*.catch(err =>{
        console.log('Fallo algo pero no me importa');
    });
    podemos hacer un await Promise.all([sleep(2000), sleep(1000)]);
    await sleep(2000);
    console.log('Han pasado los segundos ', resultado);
    await sleep(2000);
    console.log('Han pasado los segundos ', resultado);
    await sleep(2000);
    console.log('Han pasado los segundos ', resultado);*/
    for (let i=0; i<5;i++){
        
        try{
           const resultado = await sleep (2000);
           console.log('Han pasado los segundos ', resultado);
        }catch(err){
            console.log('Fallo un iteracion');
        }
        
        
    }
    throw new Error('uyuyyu');
}

//console.log(main());
main().catch(err=>{
    console.log('Hubo un error ', err);
})