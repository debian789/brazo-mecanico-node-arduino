var express = require('express.io')();
var app = express.http().io();
//require('express.io-middleware')(sokect);

app.io.route('ready',function(req) {
    req.io.emit('talk', {
        message: 'io event from an io route on the server'
    });
  
 
});


module.exports = app;
