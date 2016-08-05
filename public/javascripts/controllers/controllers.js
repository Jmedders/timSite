app.controller('timController', ['$scope', 'TimeService', '$location', '$http', '$window', '$route',
function($scope, TimeService, $location, $http, $window, $route) {
  $scope.view = {};
  $scope.view.name = "Jeff";

  $scope.view.logIn = function() {
    TimeService.logIn($scope.view.username, $scope.view.password).then(function (res) {
      if(res.data.errors){
        $scope.view.error = res.data.errors;
      }
      else{
        localStorage.jwt = res.data.token;
        $location.path('/landing');
        $window.location.reload();
      }
    });
  }

  $scope.view.logout = function() {
    localStorage.clear();
    $location.path('/');
    $window.location.reload();
  }

}]);
