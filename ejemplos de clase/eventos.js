//event


//node usa un solo hilo, tiene un bucle interno que comprueba si salta algun evento ejecuta
//los callbacks pendientes

//la asincronia es interesante porque para el tema de servidor con tantas peticiones
//es mas interesante


//el event emitter nos permite lanzar eventos

'use strict';

const EventEmitter = require('node:events')

const emisor =  new EventEmitter();
//seria un manejador de eventos
emisor.on('llamada de telefono', function(quienLLama){
    if (quienLLama=== 'hermana'){
        return
    }
    console.log('Hay una llamada en espera, ring ring neo');
});

emisor.once('llamada de telefono', function(){
    console.log('brrr brrr');
})

emisor.emit('llamada de telefono', 'hermana');
emisor.emit('llamada de telefono', 'hermana');


