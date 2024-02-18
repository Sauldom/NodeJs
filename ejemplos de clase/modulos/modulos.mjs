/*
Se basan en JS
exports para exportar

require para usar es sincrona

un modulo es un singleton (cuando cargamos un modulo lo carga en memoria y obtenemos lo que exporta, on se carga
    varias veces ino que usa lo que cargo la primera vez)


*/

'use strict';

//const calculadora = require('./calculadora');
import {suma} from './calculadora.js';
//para usar eso tiene que poner la ruta completa y nombre completo
//y tambien cambiar el tipo a ecmascript modulos.mjs
//console.log(calculadora.resta(2,5));
console.log(suma(3,5));
/*
cuidado con exports que es un alias
*/