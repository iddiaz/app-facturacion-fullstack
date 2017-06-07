var app = angular.module('loginApp', ['LoginServiceModule']);


app.controller('mainCtrl', [ '$scope', 'LoginService' ,function( $scope, LoginService ){

   $scope.invalido = false;
   $scope.cargando = false;
   $scope.mensaje = '';
   $scope.datos = {};
   
   $scope.ingresar = function( datos ) {
      
      if( datos.usuario.length < 3){
         $scope.invalido = true;
         $scope.mensaje = ' Ingrese su usuario';
         return;

      } else if(datos.contrasena.length < 3 ) {
         $scope.invalido = true;
         $scope.mensaje = ' Ingrese su constraseña';
         return;
      }

      $scope.invalido = false;
      $scope.cargando = true;
      
      LoginService.login(datos).then( function( resp ){
         //login invalido..
         if( resp.err ){
            $scope.invalido = true;
            $scope.cargando = false;
            $scope.mensaje = resp.mensaje;
         } else {
            //login valido
            console.log(resp.mensaje);
            window.location = resp.url;
         }
      })

      console.log(datos);
   };
   
  
}]); 