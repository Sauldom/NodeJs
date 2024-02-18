const path = require('node:path');


//barra separadora de carpetas segun SO
console.log(path.sep);

//unir rutas con path.join ya sabes las barras unix windows

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log (filePath);

const base = path.basename('/tmp/ole/ole.txt');
console.log(base);

//sale sin la extension 
const filename = path.basename('/tmp/ole/ole.txt', '.txt');
console.log(filename);

//te da la extension definitiva
const extension = path.extname('image.jpg');
console.log(extension);
