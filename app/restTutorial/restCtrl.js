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


        $http.get('http://localhost:3000/listusers').
            success(function(data) {
                $scope.greeting = data;
            });

        


        $scope.postData = function(){


            //$scope.name='';
            //$scope.superheroAlias = '';
            var dados = {};
            console.log($scope.name);
            console.log($scope.superheroAlias);
            console.log('user'+ $scope.userid);
            dados['user'+ $scope.userid] = {};
            dados['user'+ $scope.userid]['name'] = $scope.name;
            dados['user'+ $scope.userid]['password'] = $scope.password;
            dados['user'+ $scope.userid]['profession'] = $scope.profession;
            dados['user'+ $scope.userid]['ID'] = $scope.userid;
            
            
            $http.post('http://127.0.0.1:3000/listusers/', dados)
            .then(function() {console.log('success');})   // success
            .catch(function() {console.log('error');});
        }

    }

    ]);


