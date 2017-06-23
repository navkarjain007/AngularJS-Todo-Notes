(function(){
  'use strict';

  angular
  .module('app.todo')
  .controller('todoCtrl', function($scope){
    $scope.tasks=[];
    $scope.searchEnter=function(){
     if(event.which==13 && $scope.task !=""){
        $scope.addTask();
      }
    };
    $scope.addTask=function(){
      $scope.tasks.push({'taskMessage':$scope.task,'status':false});
      $scope.task="";
    };
    $scope.remove = function() {
      var oldTodos = $scope.tasks;
      $scope.tasks = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.status) $scope.tasks.push(todo);
      });
    };
  });

})();