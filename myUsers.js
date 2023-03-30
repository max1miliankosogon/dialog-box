var app = angular.module('myApp', []);
   
    app.controller('validateCtrl', function($scope) { 
    $scope.user = 'Петро Сидоренко';  //  присвоїмо привязаним до полів 
    $scope.email = 'sydor9@gmail.com'; // вводу перемінних початкове значення ,
    $scope.bell = '099-456-74-56';        // воно буде висвітлене в полі вводу при
    $scope.password = '65777455';      // завантаженні web сторінки

  });

function myFunctionReset() {                  //  додамо функцію очищення полів вводу 
  document.getElementById("myForm").reset();  
}                         

function myFunctionSubmit() {
    document.getElementById("myForm").submit();
  }


 