var app=angular.module('single-page-app',['ngRoute']);


app.config(function($routeProvider){


      $routeProvider
          .when('/',{
                templateUrl: 'login.html'
          })
          .when('/about',{
                templateUrl: 'about.html'
          });


});


app.controller('cfgController',function($scope,$rootScope){
	$rootScope.logued = false;
    $scope.message="Hello world";

});

app.controller('loginController',function($scope,$location,$rootScope){

    $scope.message="Hello world";

    
    $scope.login = function() {

       alert($scope.user+'  '+$scope.pass);
       	if( $scope.user == 'admin' && $scope.pass == '321321' ){

    		$location.path('/about');
    		$rootScope.logued = true;
       	}else{
       		
       		alert('Error al autenticar');
    		$location.path('/');
    		$rootScope.logued = false;

       	}
    }
      
});
