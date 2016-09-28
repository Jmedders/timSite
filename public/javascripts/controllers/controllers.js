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
    if($scope.view.adultColour){
      $scope.view.adultColour = false;
    } else{
      $scope.view.adultColour = true;
    }
  }
  $scope.view.showRidgelings = function(){
    if($scope.view.ridgelings){
      $scope.view.ridgelings = false;
    } else{
      $scope.view.ridgelings = true;
    }
  }
  $scope.view.showSolo = function(){
    if($scope.view.solo){
      $scope.view.solo = false;
    } else{
      $scope.view.solo = true;
    }
  }
  $scope.view.logout = function() {
    localStorage.clear();
    $location.path('/');
    $window.location.reload();
  }

  $scope.view.submitPost = function(){
    $scope.view.date = new Date();
    TimeService.submitblog($scope.view.text, $scope.view.date).then(function(res){
      if(res.data.errors){
        $scope.view.error = res.data.errors
      } else {
        $location.path('/writing');
        $window.location.reload();
      }
    })
  }

}]);

app.controller('secondaryController', ['$scope', 'secondaryService', '$location', '$http',
function($scope, secondaryService, $location, $http){
  $scope.view = {};
  $scope.fiction = 'Short stories';
  if($location.path('/writing')){
    secondaryService.getblogs().then(function (res) {
      console.log(res.data);
      $scope.view.blogpostsinfo = res.data;
    })
  }
}]);
