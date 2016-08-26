/**
 * Created by erkanderon on 8/25/16.
 */

'use strict';

angular.module('restTutorial', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/rest', {
            templateUrl: 'restTutorial/rest-template.html',
            controller: 'restCtrl'
        });
    }])

    .controller('restCtrl', ['$scope','$http',function($scope, $http) {


        $http.get('http://rest-service.guides.spring.io/greeting').
            success(function(data) {
                $scope.greeting = data;
            });

    }

    ]);


