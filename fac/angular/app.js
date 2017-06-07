var app = angular.module('facturacionApp', [
  'ngRoute',
  'jcs-autoValidate',
  'facturacionApp.configuracion',
  'facturacionApp.mensajes',
  'facturacionApp.notificaciones',
  'facturacionApp.clientesCtrl',
  'facturacionApp.dashboardCtrl',
  'facturacionApp.clientes'
  
  ]);


angular.module('jcs-autoValidate')
.run([
    'defaultErrorMessageResolver',
    function (defaultErrorMessageResolver) {
        // To change the root resource file path
        defaultErrorMessageResolver.setI18nFileRootPath('angular/lib');
        defaultErrorMessageResolver.setCulture('es-co');
    }
]);

/**
 * Rutas
 */

app.config(['$routeProvider', function($routeProvider){

  $routeProvider
    .when('/', {
      templateUrl: 'dashboard/dashboard.html',
      controller: 'dashboardCtrl'
    })
    .when('/clientes/:pag', {
      templateUrl: 'clientes/clientes.html',
      controller : 'clientesCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })

}]);


/**
 * Controladores
 */

app.controller('mainCtrl', [
  '$scope', 
  'ConfiguracionFactory', 
  'MensajesFactory',
  'NotificacionesFactory',
  function($scope, ConfiguracionFactory, MensajesFactory, NotificacionesFactory ){

  $scope.config = {};

  $scope.mensajes = MensajesFactory.mensajes;

  $scope.usuario = {
    nombre: 'Iván Díaz',
    profesion: 'Front Developer'
  }

  $scope.titulo = '';
  $scope.subtitulo = '';

  ConfiguracionFactory.cargar().then( function (){
    $scope.config = ConfiguracionFactory.config
    // console.log($scope.config);
  }, );


  $scope.notificaciones = NotificacionesFactory.notificaciones
  // console.log($scope.config);
  // console.log($scope.notificaciones);

  
  /**
   * Funciones globales del scope
   */

  $scope.activar = function( menu, submenu, titulo, subtitulo ){

    $scope.titulo = titulo;
    $scope.subtitulo = subtitulo;

    $scope.mDashboard = '';
    $scope.mClientes  = '';

    $scope[menu] = 'active';
  }


}])



/**
 * Filtros
 * */

app.filter('quitarLetra', function(){

  return function(palabra){
    if(palabra && palabra.length > 1){
      return palabra.substr(1)
    } else{
      return palabra;
    }
  }
})
.filter('mensajeCorto', function(){
  return function(mensaje){
    if( mensaje.length > 20 ){
      return mensaje.substr(0, 35 ) + '...';

    } else {
      mensaje
    }
  }
})