const mongoose = require('mongoose');



//definir el schema de los agentes

const agenteSchema = mongoose.Schema({
    name: String,
    age: Number
});
//podemos hacer un dato requerido y que tenga unos requisitos se abresn llaves y se mira la docu

//crear el modelo de agente
const Agente = mongoose.model('Agente', agenteSchema);

//(opcional)  exportar el modelo

module.exports = Agente;