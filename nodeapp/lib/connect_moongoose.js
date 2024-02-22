'mode strict'

const mongoose = require('mongoose');

mongoose.connection.on('error', err=>{
    console.log('Error en la conexcion ', err);
});

mongoose.connection.once('open', ()=>{
    console.log('Conectado a mongodb en ', mongoose.connection.name);
})

///la direccion y tambien que base de datos de mongo vamos a usar
mongoose.connect('mongodb://127.0.0.1:27017/cursonode');

module.exports = mongoose.connection;


