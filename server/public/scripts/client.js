var myApp = angular.module( 'myApp', ['ngRoute'] );

// Define routes in a config function using $routeProvider
myApp.config(function($routeProvider, $locationProvider) {
$routeProvider
  .when('/', {
  template: '<p>Ready for high-fiver time?  Select a pal to test your skills</p>'})
  .when('/character1', {
  templateUrl: 'views/pages/character1.html',
  controller: 'HighFiveController1 as hf'})
  .when('/character2', {
  templateUrl: 'views/pages/character2.html',
  controller: 'HighFiveController2 as hf'})
  .when('/character3', {
  templateUrl: 'views/pages/character3.html',
  controller: 'HighFiveController3 as hf'})
  .otherwise('/');

$locationProvider.html5Mode(true);
});
