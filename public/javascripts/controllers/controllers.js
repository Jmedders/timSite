app.controller('timController', ['$scope', 'TimeService', '$location', '$http', '$window', '$route',
function($scope, TimeService, $location, $http, $window, $route) {
  $scope.view = {};
  $scope.view.name = "Jeff";
  $scope.view.adultColour = false;
  $scope.view.ridgelings = false;
  $scope.view.solo = false;
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

  $scope.view.showAdultColour = function(){
    $scope.view.adultColour = true;
  }
  $scope.view.showRidgelings = function(){
    $scope.view.ridgelings = true;
  }
  $scope.view.showSolo = function(){
    $scope.view.solo = true;
  }
  $scope.view.logout = function() {
    localStorage.clear();
    $location.path('/');
    $window.location.reload();
  }

}]);

app.controller('secondaryController', ['$scope', '$http',
function($scope, $http){
  $scope.fiction = 'Short stories'
}]);
