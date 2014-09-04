var app = angular.module('appTodo', []);

var tasks = [];

app.controller('taskController', ['$scope', function($scope){
  this.description = '';
  this.todoList = tasks;
  
  $scope.addTask = function(){
    tasks.push({description: $scope.description, done:false});
    this.description = '';
  };

}]);

