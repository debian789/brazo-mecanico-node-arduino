##Brazo mecanico Node, johnny-five,socket.io y  Arduino
===========================

Controlar un brazo mecanico por medio de una interfaz web utilizando [node] como servidor, [johnny-five] como libreria 
para interactuar con  [Arduino] por medio de javascript, y [socket.io] para darle tiempo real a los movimientos del brazo.  

### Requisitos en windows 

 - [Python](https://www.python.org/download/releases/2.7.6/) y agregarlo al [path](https://silvercorp.wordpress.com/2012/05/27/pasos-de-instalacion-de-python-en-windows/) 
 - Instalar node inferior a  v4.0.0  [node](https://nodejs.org/en/blog/release/v0.10.36/)
 - Instalar [Visual Studio Express](www.microsoft.com/visualstudio/eng/2013-downloads#d-2013-express)
 - Instalar driver de [Arduino](https://www.arduino.cc/en/Guide/windows#toc4) 

### Requisitos Linux 

 - Instalar node inferiro a  v4.0.0  [node](https://nodejs.org/en/blog/release/v0.10.36/)
 - build-essential 
 - Asignar permisos al [puerto serial](https://www.youtube.com/watch?v=qzkUkXJkto0) de Arduino 

###Instalación 

```shell
$ git clone https://github.com/debian789/brazo-mecanico-node-arduino.git  
$ cd brazo-mecanico-node-arduino 
$ npm install 
```

### Ejecución

```shell
  $ node start
```

### Montaje de la tarjeta Arduino y servo motores

<img src="https://github.com/debian789/brazo-mecanico-node-arduino/blob/master/public/images/montaje.png"/>



### Demo del funcionamiento 

Video del funcionamiento [aqui]

<iframe width="560" height="315" src="//www.youtube.com/embed/c9vkcL5oW2g" frameborder="0" allowfullscreen></iframe>



### Documentación del proyecto 

En la documentación se explica los pasos de como armar el [proyecto](http://www.miguelsuescun.com/brazo-mecanico-con-node-johnny-five-socket-io-y-arduino/) 




[johnny-five]:https://github.com/rwaldron/johnny-five
[node]:http://nodejs.org/
[Arduino]:http://www.arduino.cc/
[socket.io]:http://socket.io/
[aqui]:https://www.youtube.com/watch?v=c9vkcL5oW2g
