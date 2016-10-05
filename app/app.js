'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'restTutorial',
  'calculator',
  'algorithms',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider

  .when('/calculator', {
            templateUrl: 'calculator/calculator-template.html',
            controller: 'calcCtrl'
        })
  .when('/algorithms', {
            templateUrl: 'algorithms/algorithms-template.html',
            controller: 'algoCtrl'
        })
  .when('/google', {
            templateUrl: 'Templates/google-Template.html',
            
        })
  
  .otherwise({redirectTo: '/view1'});
}]);
