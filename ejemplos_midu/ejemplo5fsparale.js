//estamos haciendo 2 trabajos en paralelo


const fs = require('node:fs/promises')

Promise.all([
    fs.readFile('./archivo.txt', 'utf-8'),
    fs.readFile('./archivo2.txt', 'utf-8')
]).then (([text,secondText])=>{
    console.log('Leyendo el primer archivo: ', text);
    console.log('Leyendo el segundo archivo ', secondText);
})
