'use strict';

function escribeTrasTresSegundos(texto, callback){
    setTimeout(()=>{
        console.log(texto);
        callback();
    },3000);
}

//escribeTrasTresSegundos('texto', function(){});


/*for (let i=0;i<=5;i++){
    escribeTrasTresSegundos('texto1' + i, function (){
        console.log('fin');
    });
}
*/

//recursividad funcion que se llame a si misma
//en este caso 5 veces
/*
function serie(n, fn, callback){
    if (n===0){
        //termino el bucle
        callback();
        return
    }
    n=n-1;
    fn('texto'+ n, function(){
        serie(n, fn,callback);
    })
}

serie(5, escribeTrasTresSegundos,function(){
    console.log('fin');
});
*/
function serie(arr, fn, callback){
    if (arr.length==0){
        //termino el bucle
        callback();
        return
    }
    
    fn('texto'+ arr.shift(), function(){
        serie(arr, fn,callback);
    })
}

/*serie([1,2,3,'cuatro',5], escribeTrasTresSegundos,function(){
    console.log('fin');
});*/

async.concatSeries([1,2,3,'cuatro',5], escribeTrasTresSegundos, function(){
    console.log('fin');
})



