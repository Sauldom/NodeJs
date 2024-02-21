var express = require('express');
var router = express.Router();
const {query,custom, validationResult} = require('express-validator');

/* GET home page. */
router.get('/', function(req, res, next) {
  const now = new Date();

  res.locals.esPar = (now.getSeconds()%2) ===0;
  res.locals.segundoActual = now.getSeconds();

  res.locals.inyeccion= '<script>alert ("inyectado")</script>'
  
  res.locals.users =[
    {name:'Smith', age:34},
    {name:'Brown', age:43}

  ]
  res.render('index', { title: 'Express',
  otracosa:'Otra cosa'
 });
});

//GET /parametro en ruta/54
//si vas a a la pag 127.0.0.1:30000/parametro_en_ruta/54 nos manda un mensaje
router.get('/parametro_en_ruta/:numero', (req, res, next)=>{
  const numero = req.params.numero;
  const talla =req.query.talla;
  const color = req.query.color;

  res.send('He recibido el numero ' + numero +' talla: '+ talla+ ' color '+color);
});

//con numero opcional
router.get('/parametro_opcional/:numero?', (req, res, next)=>{
  const numero = req.params.numero;
  res.send('He recibio el numeor opcional '+ numero);
});

//recibir parametros con filtro por regex
router.get('/producto/:nombre/talla/:talla([0-9]+)/color/:color', (req,res,next)=>{
  const nombre = req.params.nombre;
  const talla = req.params.talla;
  const color = req.params.color;

  res.send(`Me pediste talla: ${talla}, nombre: ${nombre}, color: ${color}`);
});

//POST /usuario
//crear un usuario
router.post('/usuario', (req,res,next)=>{
  console.log(req.body);
  const apiKey = req.get('api-key');
  console.log(apiKey);
  res.send('ok');
})
//GET /enquerystring?age=20 &talla=6
//valida si es numerico y pone un mensage que no es 
router.get('/enquerystring', [
  query('age').isNumeric().withMessage('must be numeric'),
  query('talla').custom(value=>{
    if(value>5) return true
    else return false;
  }).withMessage('Must be greater than 5')
],
 (req,res,next)=>{
  validationResult(req).throw();//lanza una excepcion si hay errores de validacion
  res.send('ok');
})

module.exports = router;
