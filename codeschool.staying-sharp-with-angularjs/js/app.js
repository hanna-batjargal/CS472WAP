angular.module('NoteWrangler', ['ngRoute'])
.config(function($routeProvider){
  $routeProvider
    .when('/notes', {
    templateUrl:'/templates/pages/notes/index.html',
  }).when('/users', {
    templateUrl:'/templates/pages/users/index.html',
  }).otherwhise({redirectTo:'/'});
  
});