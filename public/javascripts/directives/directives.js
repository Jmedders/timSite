app.directive('writingDirective', function(){
  return {
    restrict: "E",
    templateUrl: 'javascripts/directives/views/writingdirective.html',
    controller: 'secondaryController'
  }
})
app.directive('videoDirective', function(){
  return {
    restrict: "E",
    templateUrl: 'javascripts/directives/views/videodirective.html',
    controller: 'secondaryController'
  }
})
