
// establecer conexion con socket.io
io = io.connect();


$('document').ready(function(){


  //Activar el modo automatico 
  $(".automatic").click(function(){
    io.emit('rutina:rutina',{
      valor : 'encendido rutina' 
    });
  });

  //Controlar el movimiento horizontal 
  $( "#servo_A" ).slider({
    orientation: "horizontal",
    range: "min",
    min: 1,
    max: 179,
    value: 90,
    slide: function( event, ui ) {
      // Envia el valor de la posicion del brazon al server 
      io.emit('servo_A:moverse',{
        valor : ui.value 
      });
    }
  });

  //Controlar el movimiento de adelante y atras 
  $( "#servo_B" ).slider({
    orientation: "vertical",
    range: "min",
    min: 20,
    max: 80,
    value: 56,
    slide: function( event, ui ) {

      // Envia el valor de la posicion del brazon al server 
      io.emit('servo_B:moverse',{
        valor : ui.value 
      });
    }
  });


  // controlar el movimiento de arriba y abajo 
  $( "#servo_C" ).slider({
    orientation: "vertical",
    range: "min",
    min: 1,
    max: 179,
    value: 54,
    slide: function( event, ui ) {

      // Envia el valor de la posicion del brazon al server 
      io.emit('servo_C:moverse',{
        valor : ui.value 
      });
    }
  });

  //Controlar el movimiento de abrir y cerrar el brazo 
  $( "#servo_D" ).slider({
    orientation: "horizontal",
    range: "min",
    min: 1,
    max: 60,
    value: 2,
    slide: function( event, ui ) {

      // Envia el valor de la posicion del brazon al server 
      io.emit('servo_D:moverse',{
        valor : ui.value 
      });
    }
  });

});

// Emit ready event.


//// muestra el valor de la posicion actual del brazo 

io.on('rutina_mensaje',function(data){
  $('.mensajeRutina').html(data.message);
});

io.on('servo_A_mensaje', function(data) {
  $('.serva_A_position').html(data.message)
})  

io.on('servo_B_mensaje', function(data) {
  $('.serva_B_position').html(data.message)
})  

io.on('servo_C_mensaje', function(data) {
  $('.serva_C_position').html(data.message)
})  

io.on('servo_D_mensaje', function(data) {
  $('.serva_D_position').html(data.message)
})  
