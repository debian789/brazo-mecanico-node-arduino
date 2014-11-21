var express = require('express.io');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var app = express().http().io();

//implementar la libreria de johnny-five
var five = require("johnny-five"),board,servo_A,servo_B,servo_C,servo_D;



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



board = new five.Board();


board.on("ready", function() {

///  Asociar pines  digitales de Arduino 

  //Controla el movimiento horizontal 
  servo_A = new five.Servo({
    pin: 9,
    type: "continuous"
  });

  //Controla  el movimiento de adelante y atras
  servo_B = new five.Servo({
    pin: 8,
    type: "continuous"
  });

  //Controla el movimiento de arriba y abajo 
  servo_C = new five.Servo({
    pin: 7,
    type: "continuous"
  });

  //Controla el movimiento del abrir y cerrar el brazo 
  servo_D = new five.Servo({
    pin: 6,
    type: "continuous"
  });


// Asociar los servo motores al Repl 
  board.repl.inject({
    servoA: servo_A,
    servoB: servo_B,
    servoC: servo_C,
    servoD: servo_D,
  });



  var inicio = 0;
  var rutina_ciclo;

  // Estado inicial del brazo 
  servo_A.move(88);
  servo_B.move(1);
  servo_C.move(77);
  servo_D.move(35);



  app.io.route('rutina',{
    rutina:function(req){

      //Estado inicial de la rutina 
      servo_A.move(88);
      servo_B.move(1);
      servo_C.move(90);
      servo_D.move(35);

      //Rutina que esta asociada al tiempo y posiciones de los servo motores
      rutina_ciclo = setInterval(function(){
        setTimeout(function(){ servo_A.move(1) },2000);
        setTimeout(function(){ servo_B.move(1) },3000);
        setTimeout(function(){ servo_D.move(1) },4000);
        setTimeout(function(){ servo_B.move(10) },4100);
        setTimeout(function(){ servo_B.move(20) },4200);
        setTimeout(function(){ servo_B.move(30) },4300);
        setTimeout(function(){ servo_B.move(40) },4400);
        setTimeout(function(){ servo_B.move(40) },5000);
        setTimeout(function(){ servo_D.move(35) },6000);
        setTimeout(function(){ servo_B.move(20) },7000);
        setTimeout(function(){ servo_A.move(170) },8000);
        setTimeout(function(){ servo_D.move(1) },9000);
      }, 10000);

      // Mensaje de que se ha iniciado el modo automatico 
      req.io.emit('rutina_mensaje',{
        message:'Automatic On'
      });

    }
  });





  app.io.route('servo_A',{
    moverse: function(req) {
      //Detener el Modo Automatico 
      clearInterval(rutina_ciclo);
      req.io.emit('rutina_mensaje',{
        message:'Automatic off'
      });


     //Asignar el valor que envia el cliente web 
      servo_A.move(req.data.valor);

      // Retorna la posicion del servo motor A al cliente web 
      req.io.emit('servo_A_mensaje', {
        message: servo_A.value
      });
    }
  });


  app.io.route('servo_B',{
    moverse: function(req) {
      //Detener el Modo Automatico 
      clearInterval(rutina_ciclo);
      req.io.emit('rutina_mensaje',{
        message:'Automatic off'
      });

      //Asignar el valor que envia el cliente web 
      servo_B.move(req.data.valor);

      // Retorna la posicion del servo motor B al cliente web 
      req.io.emit('servo_B_mensaje', {        
        message: servo_B.value
      });
    }
  });

  app.io.route('servo_C',{
    moverse: function(req) {
      //Detener el Modo Automatico 
      clearInterval(rutina_ciclo);
      req.io.emit('rutina_mensaje',{
        message:'Automatic off'
      });

      //Asignar el valor que envia el cliente web 
      servo_C.move(req.data.valor);

      // Retorna la posicion del servo motor C al cliente web 
      req.io.emit('servo_C_mensaje', {        
        message: servo_C.value
      });
    }
  });

  app.io.route('servo_D',{
    moverse: function(req) {
      //Detener el Modo Automatico 
      clearInterval(rutina_ciclo);
      req.io.emit('rutina_mensaje',{
        message:'Automatic off'
      });

      //Asignar el valor que envia el cliente web 
      servo_D.move(req.data.valor);

      // Retorna la posicion del servo motor D al cliente web 
      req.io.emit('servo_D_mensaje', {        
        message: servo_D.value
      });
    }
  });




  
});

module.exports = app;
