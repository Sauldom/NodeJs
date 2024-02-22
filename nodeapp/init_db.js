//un script que meteria datos con npm run init_db

'use script'

const readline = require('node:readline');
const connection = require('./lib/connect_moongoose');
const Agente = require('./models/Agente');


main().catch(err=>console.log('Hubo un error', err))

async function main(){

    //esperar a que se conecte a la BD
    await new Promise ((resolve)=> connection.once('open', resolve));
    const borrar = await pregunta('Estas seguro de que quieres borrar el contenido de la base de datos');
    if (!borrar){
        process.exit();
    }
    await initAgents();

    connection.close();
}

async function initAgents(){
    //borrar todos los agentes
    const deleted = await Agente.deleteMany();

    console.log(`eliminados ${deleted.deletedCount} agentes`);

    //crear nuevos agentes
    const inserted = await Agente.insertMany([
        {name:'Smith', age:34},
        {name:'Brown', age:38},
        {name:'Jones', age:26},
        {name:'Saul', age:43},
    ]);
    console.log(`Creados ${inserted.length} agentes`);
}

function pregunta(texto) {
    return new Promise((resolve, reject) => {
      // conectar readline con la consola
      const ifc = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      ifc.question(texto, respuesta => {
        ifc.close();
        resolve(respuesta.toLowerCase() === 'si');
      })
    });
  }
