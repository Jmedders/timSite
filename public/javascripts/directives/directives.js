app.directive('writingDirective', function(){
  return {
    restrict: "E",
    templateUrl: 'javascripts/directives/views/writingdirective.html'
  }
})
app.directive('videoDirective', function(){
  return {
    restrict: "E",
    templateUrl: 'javascripts/directives/views/videodirective.html',
    controller: 'secondaryController'
  }
})
app.directive('editPost', function() {
  return {
    restrict: 'E',
    templateUrl: 'javascripts/directives/views/popup-editblog.html'
  }
})
