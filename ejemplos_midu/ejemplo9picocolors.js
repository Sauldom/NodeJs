const fs = require('node:fs/promises');
const path = require('node:path');

const picocolors = require('picocolors');
//podemos dar color a nuestra consola

const folder = process.argv[2] ?? '.';

async function ls (folder){
    let files
    try{
        files = await fs.readdir(folder);
    } catch {
        console.error(picocolors.red(`No se pudo leer el directorio: ${folder}`));
        process.exit(1);
    }
   
    const filePromises = files.map(async file=>{
        const filePath= path.join(folder, file);
        let stats;
        try{
            stats = await fs.stat(filePath);
        }catch{
            console.error(`No se pudo leer el directorio: ${folder}`);
            process.exit(1);
        }
    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? 'd' : 'f'; // lo que hacemos es que si es un directorio ponga una d y si es un archivo ponga una f

    const fileSize = stats.size;
    const fileModified = stats.mtime.toLocaleDateString();

    return `${fileType}  ${picocolors.blue(file.padEnd(20))}   ${picocolors.green(fileSize.toString().padStart(10))}  ${picocolors.yellow(fileModified)}`;
    //padEnd(20) siempre ocupa 20 espacios y padstart lo mismo por el principio
    })

    const filesInfo = await Promise.all(filePromises);

    filesInfo.forEach(fileInfo=>console.log(fileInfo))
} 

ls(folder);
//podrias pasarle otra carpeta y haria lo mismo un ls 
// node ejemplo8.js ./servidor por ejemplo



//vmaos a instalar npm install standard -D
//o --development eso quiere decir qu es una dependecia de desarrollo
//no lo necesita para funcionar solo para el desarrollador por lo que en packge json no 
//se deberia instalar para ello deberiamos instalar la extension de eslint