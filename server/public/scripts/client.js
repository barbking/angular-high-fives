var myApp = angular.module( 'myApp', ['ngRoute'] );

// Define routes in a config function using $routeProvider
myApp.config(function($routeProvider, $locationProvider) {
$routeProvider
  .when('/home', {
  templateUrl: 'views/pages/home.html',})
  .when('/character1', {
  templateUrl: 'views/pages/character1.html',
  controller: 'HighFiveController1 as hf'})
  .when('/character2', {
  templateUrl: 'views/pages/character2.html',
  controller: 'HighFiveController2 as hf'})
  .when('/character3', {
  templateUrl: 'views/pages/character3.html',
  controller: 'HighFiveController3 as hf'})
  .otherwise('/home');

$locationProvider.html5Mode(true);
});
