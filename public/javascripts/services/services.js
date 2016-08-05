app.factory('TimeService', function($http, $location){
  return{
    logIn: function(username, password){
      var user = {};
      user.username = username;
      user.password = password;
      console.log(user);
      return $http.post('/login', user)
    }
  }
});

app.service("timInterceptor", function timInterceptor() {
  return {
    request: function(config){
      // console.log(localStorage.jwt);
      if (localStorage.jwt) {
        config.headers.Authorization = 'Bearer ' + localStorage.jwt;
      }
      return config;
    }
  }
})
