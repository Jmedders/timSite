var app = angular.module('timApp', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('timInterceptor')
  $routeProvider
    .when('/', {
      templateUrl: 'partials/landing.html',
      controller: 'timController'
    })
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'timController'
    })
    .when('/landing', {
      templateUrl: 'partials/landing.html',
      controller: 'timController'
    })
    .when('/discography', {
      templateUrl: 'partials/discography.html',
      controller: 'timController'
    })
    .when('/videos', {
      templateUrl: 'partials/videos.html',
      controller: 'timController'
    })
    .when('/writing', {
      templateUrl: 'partials/writing.html',
      controller: 'timController'
    })
});

app.run(function($rootScope, $location) {

  if (localStorage.jwt) {
    $rootScope.user = jwt_decode(localStorage.jwt);
    console.log("USER: " + $rootScope.user);
  }
});
