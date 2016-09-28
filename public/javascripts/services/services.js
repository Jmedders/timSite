app.factory('TimeService', function($http, $location){
  return{
    logIn: function(username, password){
      var user = {};
      user.username = username;
      user.password = password;
      console.log(user);
      return $http.post('/login', user)
    },
    submitblog: function(text, date){
      var blog = {};
      blog.text = text;
      blog.date = date;
      console.log(blog);
      return $http.post('/blogging', blog)
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
