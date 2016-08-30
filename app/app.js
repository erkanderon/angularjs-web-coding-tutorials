'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'restTutorial',
  'calculator',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider

  .when('/calculator', {
            templateUrl: 'calculator/calculator-template.html',
            controller: 'calcCtrl'
        })
  
  .otherwise({redirectTo: '/view1'});
}]);
