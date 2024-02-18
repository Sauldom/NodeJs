
//herencia
//defino otro tipo de objeto y hereda las caracteristicas del otro objeto


//en js podemos hacer que hereden padre de hijos, que hereden unas cosas si otras no
//cada objeto en Js tiene una propiedad que se llama prototype que apunta a su padre
//y se pueden seguir las cadenas de ancestros de la herencia hasta null que seria el origen
//de los objetos

//cuando hay un metodo busca directamente a suobjeto que si no la tiene la busca a su ancestro hasta elorigen
'use strict';

function Persona(nombre){
    this.nombre =  nombre;
    //this.saluda = function (){
    //    console.log('Hola soy ', this.nombre);
    //} lo qitamos porque lo vamos a modificar en su prototypoe
}

const pepe = new Persona('Pepe');
const saul = new Persona('Saul');
Persona.prototype.saluda= function(){
    console.log('Hola soy ', this.nombre);
}
//cada objeto tiene su propio metodo saluda, pero esta construida de la misma forma
pepe.saluda();
saul.saluda();

console.log(saul, typeof saul, saul instanceof Persona);


//herencia simple


//Quiero hacer un tipo de Objetos llamado Agente que herede de persona

function Agente (nombre){
    //heredar el constructor de las personas
    //ejecutar el constructor de las personas con mi this
    Persona.call(this, nombre);
}

//heredar las propiedades y metodos de las personas
Object.setPrototypeOf(Agente.prototype, Persona.prototype);

const smith = new Agente('Smith');

smith.saluda();


//herencia multiple hereda de varios ancestros a la vez-----------

//quiero que los agentes hereden tanto de las personas como de los supeheroes

function SuperHeroe(){
    this.vuela = function (){
        console.log(this.nombre, ' vuela');
    }
}
//copiar todas las propiedades de los superheroes al prototypo de los agentes
Object.assign(Agente.prototype, new SuperHeroe());

smith.vuela();

console.log(smith);
console.log(Agente.prototype);
console.log (smith instanceof Persona);
console.log (smith instanceof Agente);
console.log (smith instanceof SuperHeroe);

//------ eventos

// quiero que mis agentes emitan eventos

const EventEmitter = require('node:events')
/*
Object.assign(Agente.prototype, new EventEmitter());

smith.on('volando', function(){
    console.log('smith esta volando');

})

smith.emit('volando');*/