var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var basicAuth = require('./lib/basicAuthMiddleware');

require('./lib/connect_moongoose');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/*
*Middlewares
*/


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//app.use('/pdfs'.static('/usr/ficheros.pdf'));

/*app.get('/sacaerror', (req, res, next)=>{
  const error = new Error('error fatal');
  next(error);
})*/

app.get('/prueba', (req, res, next)=>{
  res.send('página de prueba');
  console.log('Peticion', req.hostname);
  next();
})

/**
 * Rutas del API
 * 
 */
app.use('/api/agentes', basicAuth, require('./routes/api/agentes'));


/*
rutas del website

*/

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  //errores de validacion
  if(err.array){
    const errInfo = err.array({})[0];
    console.log(errInfo);
    err.message = `Not valid - ${errInfo.type} in ${errInfo.location} ${errInfo.path} ${errInfo.msg}`;
    err.status =422;
  }


// detectar si el fallo es en el API
//responder en el formato JSON
  if (req.originalUrl.startsWith('/api')){
    res.json({error:err.message});
    return;
  }


  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
