const fs = require('node:fs')
//podemos utilizar el promise file para hacer promesas
//esto solo en los modulos que no tiene promesas nativas
//const {promisify} = require('node:util');

//const readFilePromise = promisify(fs.readFile);


const text4 = fs.readFile('./archivo.txt', 'utf-8', (err, text)=>{
    console.log(text, ' hola4')
})

console.log('Leyendo el primer archivo')
const text = fs.readFileSync('./archivo.txt', 'utf-8')


console.log(text);

const text2 = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log('Leyendo el segundo  archivo')

console.log(text2)

//como podemos hacer esto asincrono 
//los callback se ejecuta cuando una tarea sincrona ha terminado
const text3 = fs.readFile('./archivo.txt', 'utf-8', (err, text)=>{
    console.log(text)
})

//hemos hecho una callback con el text 4 tambien

