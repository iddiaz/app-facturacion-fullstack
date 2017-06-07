var app = angular.module('facturacionApp.mensajes', []);

app.factory('MensajesFactory', ['$http','$q', function($http, $q){

  var self = {
    mensajes: [{
      img: 'dist/img/user2-160x160.jpg',
      nombre: 'Juan Carlos López',
      mensaje: 'Bienvenido a nuestro servicio de facturación',
      fecha: '5-Marzo'
    },{
      img: 'dist/img/user2-160x160.jpg',
      nombre: 'María Pineda',
      mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, quae. Nobis ab adipisci alias, iusto odio facere quis tempore rerum, cumque itaque velit saepe dignissimos quod, error vero quas corrupti. ',
      fecha: '8-Marzo'
    },{
      img: 'dist/img/user2-160x160.jpg',
      nombre: 'Maarcos Gómez',
      mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      fecha: '10-Abril'
    }]
  };



  return self;
}])