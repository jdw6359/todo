'use strict';

angular.module('todoListApp')
       .controller('mainCtrl', function($scope, todoService){

  todoService.getTodos(function(response){
    $scope.todos = response.data.todos;
  });
  
  $scope.addTodo = function() {
    $scope.todos.unshift({
      name: "This is a new todo.",
      completed: false
    });
  };
  
})