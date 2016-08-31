'use strict';

var app = angular.module('calculator', []);

    

    app.controller('calcCtrl', ['$scope','$http',function($scope, $http) {

    	$scope.current = '';
    	$scope.first = '';
    	$scope.second = '';
    	$scope.ans = 0;
    	$scope.history = '';

    	$scope.numberClicked = function(clickedNumber){

    		if(($scope.current === '')&&(clickedNumber===0)){
    			$scope.current ='';
    		}else{
    			$scope.current += clickedNumber;
    			$scope.history += clickedNumber;
    			console.log($scope.current)
    		}
    	};
    	$scope.operandClicked = function(operand){

    		$scope.first = $scope.current;
    		$scope.current = '';
    		$scope.operand = operand;
    		$scope.history += operand;
    		console.log(operand, $scope.current);
    	}
    	$scope.equalEnter = function(){
    		$scope.second = $scope.current;
    		$scope.current = '';

    		if($scope.operand==="+"){
    			$scope.ans = parseInt($scope.first) + parseInt($scope.second);
    			console.log($scope.ans);
    		}else if($scope.operand==="/"){

    			$scope.ans = parseInt($scope.first) / parseInt($scope.second);
    			console.log($scope.ans);

    		}else if($scope.operand==="*"){
    			$scope.ans = parseInt($scope.first) * parseInt($scope.second);
    			console.log($scope.ans);

    		}else if($scope.operand==="-"){

    			$scope.ans = parseInt($scope.first) - parseInt($scope.second);
    			console.log($scope.ans);

    		}
    		$scope.history += "=" + $scope.ans;
    	}
    	$scope.allClear = function(){
    		$scope.current = '';
    		$scope.first = '';
    		$scope.second = '';
    		$scope.operand = '';
    		$scope.ans = 0;
    		$scope.history = '';
    	}
    	$scope.clearCurrent = function(){
    		$scope.current = '';
    		//$scope.history = $scope.history.split($scope.operand);
    		
    	}			

    }]);