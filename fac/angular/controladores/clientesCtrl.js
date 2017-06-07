var app = angular.module('facturacionApp.clientesCtrl', []);

app.controller('clientesCtrl', ['$scope', '$routeParams', 'ClientesFactory', function( $scope, $routeParams, ClientesFactory){


  var pag = $routeParams.pag;
 
  
  $scope.activar('mClientes', '', 'Clientes', 'listado'); 

  $scope.clientes = {};

  $scope.clienteSel = {};

// para no tener cófigo duplicado
  // ClientesFactory.cargarPagina( pag ).then( 
  //   function(){
    
  //     // console.log('En el controlador ', ClientesFactory.clientes );
  //     $scope.clientes = ClientesFactory;
   
  //   // $scope.clientes = ClientesFactory;
  // }, function(){
  //   console.log(err);
  // });

  $scope.moverA = function( pag ) {
    
    ClientesFactory.cargarPagina( pag ).then( function(){     

        $scope.clientes = ClientesFactory;
    
    });


  };


  $scope.moverA(pag);

  /**
   * Mostrar Modal de edicion
   */
  $scope.mostrarModal = function( cliente ){

    angular.copy( cliente, $scope.clienteSel );

    console.log( cliente );
    $('#modal_cliente').modal();
  }


  /**Funcion para Guardar */

  $scope.guardar = function( cliente , frmCliente ){

    ClientesFactory.guardar( cliente ).then( function(){
      //el codigo cuando se actualizó

      $("#modal_cliente").modal('hide');

      $scope.clienteSel = {};

      frmCliente.autoValidateFormOptions.resetForm();

    });
  };
  
  
  


}]);