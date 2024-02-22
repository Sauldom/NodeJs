const mongoose = require('mongoose');



//definir el schema de los agentes

const agenteSchema = mongoose.Schema({
    name: {type:String, unique: true},
    age: Number
});
//podemos hacer un dato requerido y que tenga unos requisitos se abresn llaves y se mira la docu

//podemos crear un metodo para listar estatico que queremos que lo tengan todos los agentes en el modelo
agenteSchema.statics.listar =  function(filtro, skip, limit){
    const query = Agente.find(filtro);
    query.skip(skip);
    query.limit(limit);
    return query.exec();
}


//crear el modelo de agente
const Agente = mongoose.model('Agente', agenteSchema);

//(opcional)  exportar el modelo

module.exports = Agente;