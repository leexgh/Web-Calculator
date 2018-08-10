'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', function($scope) {
        $scope.resultText = "0";
        $scope.operator = "";
        $scope.number1 = "";
        $scope.number2 = "";

        // AC to delete
        $scope.init = function () {
            $scope.resultText = "0";
            $scope.operator = "";
            $scope.number1 = "";
            $scope.number2 = "";
        };

        // functions when click operation button
        $scope.operationSymbol = function (operationButton) {
            if ($scope.number1 != "" && $scope.number2 == "" && $scope.operator != "") {
                $scope.operator = operationButton;
            }
            else if ($scope.number1 != "" && $scope.number2 == "" && $scope.operator == "") {
                $scope.operator = operationButton;
            }
            else if ($scope.number1 != "" && $scope.number2 != "" && $scope.operator != "") {
                $scope.calculation();
                $scope.operator = operationButton;
            }
        };

        // functions when click number button
        $scope.numberInput = function (numberButton) {
            if ($scope.operator == "") {
                $scope.number1 += numberButton;
                $scope.resultText = $scope.number1;
            }
            else {
                $scope.number2 += numberButton;
                $scope.resultText = $scope.number2;
            }
        };

        // calculate the formula
        $scope.calculation = function () {
            var num1 = $scope.number1 / 1;
            var num2 = $scope.number2 / 1;
            if ($scope.operator == "+") {
                $scope.resultText = num1 + num2 + "";
            }
            else if ($scope.operator == "-") {
                $scope.resultText = num1 - num2 + "";
            }
            else if ($scope.operator == "×") {
                $scope.resultText = num1 * num2 + "";
            }
            else if ($scope.operator == "÷") {
                $scope.resultText = num1 / num2 + "";
            }
            else if($scope.operator == "÷" && $scope.number2 == "0"){
                $scope.resultText = "error";
                return;
            }
            $scope.number1 = $scope.resultText;
            $scope.number2 = "";
        };
    });