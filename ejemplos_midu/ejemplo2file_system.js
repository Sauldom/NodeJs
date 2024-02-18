

const fs = require('node:fs');

//informacion del archivo

const stats = fs.statSync('./archivo.txt');

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size
)

