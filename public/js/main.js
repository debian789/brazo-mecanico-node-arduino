
// establecer conexion con socket.io
io = io.connect();


$('document').ready(function(){

  $(".automatic").click(function(){
    io.emit('rutina:rutina',{
      valor : 'encendido rutina' 
    });
  });

  $( "#servo_A" ).slider({
    orientation: "horizontal",
    range: "min",
    min: 1,
    max: 179,
    value: 88,
    slide: function( event, ui ) {
      io.emit('servo_A:moverse',{
        valor : ui.value 
      });
    }
  });

  $( "#servo_B" ).slider({
    orientation: "vertical",
    range: "min",
    min: 1,
    max: 80,
    value: 1,
    slide: function( event, ui ) {
      io.emit('servo_B:moverse',{
        valor : ui.value 
      });
    }
  });

  $( "#servo_C" ).slider({
    orientation: "vertical",
    range: "min",
    min: 1,
    max: 179,
    value: 77,
    slide: function( event, ui ) {
      io.emit('servo_C:moverse',{
        valor : ui.value 
      });
    }
  });

  $( "#servo_D" ).slider({
    orientation: "horizontal",
    range: "min",
    min: 1,
    max: 35,
    value: 35,
    slide: function( event, ui ) {
      io.emit('servo_D:moverse',{
        valor : ui.value 
      });
    }
  });

});

// Emit ready event.


io.on('rutina_mensaje',function(data){
  $('.mensajeRutina').html(data.message);
});


// Listen for the talk event.
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
