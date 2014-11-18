##Brazo mecanico Node, johnny-five,socket.io y  Arduino
===========================

Controlar un brazo mecanico por medio de una interfaz web utilizando [node] como servidor, [johnny-five] como libreria 
para interactuar con  [Arduino] por medio de javascript, y [socket.io] para darle tiempo real a los movimientos del brazo.  


###Instalación

```shell
$ git clone https://github.com/debian789/brazo-mecanico-node-arduino.git  
$ cd brazo-mecanico-node-arduino 
$ npm install 
```

### Ejecución

```shell
  $ node ./bin/www
```

### Montaje de la tarjeta Arduino y servo motores

<img src="https://github.com/debian789/brazo-mecanico-node-arduino/blob/master/public/images/montaje.png"/>



### Demo del funcionamiento 

Video del funcionamiento [aqui]

<iframe width="560" height="315" src="//www.youtube.com/embed/c9vkcL5oW2g" frameborder="0" allowfullscreen></iframe>



[johnny-five]:https://github.com/rwaldron/johnny-five
[node]:http://nodejs.org/
[Arduino]:http://www.arduino.cc/
[socket.io]:http://socket.io/
[aqui]:https://www.youtube.com/watch?v=c9vkcL5oW2g
