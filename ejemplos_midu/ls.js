const fs = require('node:fs');

//en los callback el error siempre es el primer parametro
//le el directorio actual '.'
//esto seria nuestro ls basico lee el directorio y hace un console log
fs.readdir('.', (err, files)=>{
    if(err){
        console.log('Error al leer el directorio: ', err);
        return;
    }
    files.forEach(file=>{
        console.log(file);
    })
})