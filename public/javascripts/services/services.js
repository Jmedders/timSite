app.factory('TimeService', function($http, $location){
  return{
    logIn: function(username, password){
      var user = {};
      user.username = username;
      user.password = password;
      return $http.post('/login', user)
    },
    submitblog: function(text, date){
      var blog = {};
      blog.text = text;
      blog.date = date;
      return $http.post('/blogging', blog)
    },
    addVideo: function(url){
      var video = {};
      video.fullurl = url;
      return $http.post('/addvideo', video)
    }
  }
});
app.factory('secondaryService', function($http, $location){
  return{
    getblogs: function() {
      return $http.get('/grabposts')
    },
    getvideos: function() {
      return $http.get('/grabvideos')
    },
    deletevideos: function(id) {
      var deletion = {};
      deletion.id = id;
      return $http.post('/deletevideos', deletion)
    }
  }
})

app.service("timInterceptor", function timInterceptor() {
  return {
    request: function(config){
      if (localStorage.jwt) {
        config.headers.Authorization = 'Bearer ' + localStorage.jwt;
      }
      return config;
    }
  }
})
