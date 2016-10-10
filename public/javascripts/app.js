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
    .when('/directory', {
      templateUrl: 'partials/directory.html',
      controller: 'timController'
      // resolve: {
      //   check: function($location, $rootScope, $route){
      //     console.log($rootScope.user.admin);
      //       if($rootScope.user.admin){
      //           console.log('you are good');//Do something
      //       }else{
      //           $location.path('/');    //redirect user to home.
      //           console.log("Nice try");
      //       }
      //   }
      // }
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
    .when('/blog', {
      templateUrl: 'partials/blog.html',
      controller: 'timController',
      resolve: {
        check: function($location, $rootScope, $route){
            if($rootScope.user && $rootScope.user.id == 1){
                console.log('you are good');//Do something
            }else{
                $location.path('/');    //redirect user to home.
                console.log("Nice try");
            }
        }
      }
    })
    .when('/addvideos', {
      templateUrl: 'partials/addvideos.html',
      controller: 'timController',
      resolve: {
        check: function($location, $rootScope, $route){
            if($rootScope.user && $rootScope.user.id == 1){
                console.log('you are good');//Do something
            }else{
                $location.path('/');    //redirect user to home.
                console.log("Nice try");
            }
        }
      }
    })
});

app.run(function($rootScope, $location) {

  if (localStorage.jwt) {
    $rootScope.user = jwt_decode(localStorage.jwt);
  }
});
