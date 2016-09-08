var app = angular.module('algorithms', []);

    

    app.controller('algoCtrl', ['$scope',function($scope) {

    	$scope.reverseString = function(str){

    		$scope.reversed = str.split('').reverse().join('');
    	}
    	$scope.getSum = function(number){
    		$scope.sum = 0;

    		console.log(isNaN(number/1));

    		if(isNaN(number/1)){
    			$scope.sum = 'Type Number Please!'
    		}else{
    			for(i=0;i<number;i++){
    			$scope.sum += i;
    			}
    		}

    	}
    	$scope.getFib = function(number){
    		$scope.fib = [];

    		if(isNaN(number/1)){
    			$scope.sum = 'Type Number Please!'
    		}else{
    			tmp = 0;
    			tmp2 = 1;
    			tmp3 = 0;
    			$scope.fib.push(tmp);
    			$scope.fib.push(tmp2);
    			for(i=2;i<number;i++){
    			tmp3 = tmp2 + tmp;
    			tmp = tmp2;
    			tmp2 = tmp3;

    			$scope.fib.push(tmp3);
    			}
    		}

    	}
    	$scope.getPrimes = function(number){
    		$scope.primes = [];
    		
    		for(i=2;i<number;i++){
    			var isprime = true;
    			for(j=2;j<=i/2;j++){
    				if(i%j===0){
    					isprime=false;
    				}else{
    					if(isprime===false){
    						isprime = false;
    					}else{
    						isprime=true;
    					}
    				}
    			}
    			if(isprime===true){
    				$scope.primes.push(i);
    			}
    		}
    	}

    }]);