'use strict';

const EventEmitter = require('node:events');


const emisor = new EventEmitter();

emisor.on('llamada de telefono', function(quienLLama){
    if (quienLLama ==='aida'){
        return
    }
    console.log('ring, ring');

});

emisor.once('llamada de telefono', function(){
    console.log('Esto solo suena una vez la primera');
});


emisor.emit('llamada de telefono');

emisor.emit('llamada de telefono', 'aida'); 


// creamos los diferentes objetos

function Abuelo(nombre) {
    this.nombre = nombre;
    this.otraAbuelo = () => console.log('Otra abuelo');
  }
  Abuelo.prototype.saludaAbuelo = () => console.log('Soy tu abuelo');
  
  function Padre(nombre, apellido) {
    Abuelo.call(this, nombre);
    this.apellido = apellido;
  }
  Padre.prototype.saludaPadre = function(){ console.log(`Hola ${this.nombre} ${this.apellido}.`)};
  // Así heredamos el prototipo de abuelo para el padre
  Object.setPrototypeOf(Padre.prototype, Abuelo.prototype);
  
  function Primo() {};
  Primo.prototype.saludaPrimo = () => console.log('Soy el primo');
  
  function Nieto(nombre, apellido) {
    Padre.call(this, nombre, apellido);  
  }
  Nieto.prototype.saludaNieto = () => {console.log('Soy el nieto')};
  Object.setPrototypeOf(Nieto.prototype, Padre.prototype);
  Object.assign(Nieto.prototype, Primo.prototype);
  
  // --------------------------------------------------------------------
  
  const abuelo = new Abuelo();
  abuelo.saludaAbuelo();
  console.log(abuelo);
  
  console.log('--------------------------------');
  
  const padre = new Padre('Miquel', 'Espuñes');
  padre.saludaPadre();
  padre.saludaAbuelo();
  console.log(padre);
  console.log(Object.getPrototypeOf(padre));
  
  console.log('--------------------------------');
  
  
  const primo = new Primo();
  primo.saludaPrimo();
  console.log(primo);
  
  console.log('--------------------------------');
  
  const nieto = new Nieto('Carles', 'Espuñes');
  nieto.saludaNieto();
  nieto.saludaPadre();
  nieto.saludaAbuelo();
  nieto.saludaPrimo();
  nieto.otraAbuelo();
  console.log(nieto);
  console.log(Object.getPrototypeOf(nieto));