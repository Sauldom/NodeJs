'use strict';

//npm install expres

//cargar la libreria de express
const express = require('express');

//crear la aplcacion
const app = express();

//si hubiesemos estado trabajando con this habria que aplicar a un constructor no solo a una funcion
//espress utiliza closures
//añadir una ruta
app.get('/', (request, response, next)=>{
    response.send('hola');
})

//arrancamos el servidor
app.listen(8080, ()=>{
    console.log('Servidor arrancado http://127.0.0.1:8080');
})