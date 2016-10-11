(function () {
    'use strict';

    var myFirstApp = angular.module('myFirstApp', [])

    myFirstApp.controller('MyFirstController',MyFirstController);
    
    MyFirstController.$inject = ['$scope', '$filter'];
    function MyFirstController($scope, $filter) {
        $scope.name = "";
        $scope.sayHello = function () {
            return "Hello Dear ";
        };
        $scope.totalValue = 0;

        $scope.displayTotal = function () {
            var totalNameValue = CalculateValueofString($scope.name);
            $scope.totalValue = totalNameValue;
        };

        function CalculateValueofString(str) {
            var tot = 0;
            for (var i = 0; i < str.length; i++) {
                tot += str.charCodeAt(i);
            }
            return tot;
        }

        $scope.upper = function () {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
            $scope.displayTotal();
        };

        $scope.curPhoto = "img10";
        $scope.changePhoto = function () {
            $scope.curPhoto = "img7";
        }
    }

    //myFirstApp.controller('DIController', DIController);
    //function DIController($scope, $filter) {
    //    $scope.upper = function () {
    //        var upCase = $filter('uppercase');
    //        $scope.name = upCase($scope.name);
    //        $scope.displayTotal();
    //    };
    //}


})();