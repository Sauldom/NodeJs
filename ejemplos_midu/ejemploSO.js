globalThis.console.log('Hola');


/*todo viene de una variable global, que se puede acceder desde todos los ambitos
que es globalThis, 
en node se trabaja connun patron de diseño tipo modulo, para organizar y reutilizar el codigo




la forma de importar algo lo podemos hacer metiendolo en una variable y haciendo un
require y la ruta donde se encuentra lo que hemos exportado/importado
*/
//si por ejemplo cambias la extension a mjs para modulos ES
//en el require te salen dos puntos si das control y al quick fix te lo cambia automaticamente
//lo he probado y funciona perfectamente
const sum = require('./modulo');

console.log(sum(1,3));

//modulo nativo si pones node: y control espacio ya te da el listado
const os = require('node:os');

console.log('Info del so');

console.log('Nombre del sistema operativo: ', os.platform());
console.log('Version del sistema operativo: ', os.release());
console.log('Arquitectura del sistema operativo: ', os.arch());
console.log('CPUS: ', os.cpus());
console.log('Memoria libre', os.freemem());
console.log('Mempria total', os.totalmem());

