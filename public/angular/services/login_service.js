var app = angular.module('LoginServiceModule', []);

app.factory('LoginService', ['$http', '$q' , function( $http, $q ){

  var self = {

    login: function( datos ){
     
      var d = $q.defer();
      
      console.log('fue llamado desde el servicio login');
      $http.post('php/login/post.verificar.php', datos )
        .success(function( resp ){
          console.log(resp);
          d.resolve(resp);

        })

      return d.promise;
    }

  };

  return self;

}]);