'use strict';

angular.module('todoListApp')
       .controller('todoCtrl', function($scope, todoService) {
  
  $scope.deleteTodo = function(todo, index) {
    $scope.todos.splice(index, 1);
    todoService.deleteTodo(todo);
  };
  
  $scope.saveTodos = function() {
    var filteredTodos = $scope.todos.filter(function(todo){
      if(todo.edited) {
        return todo
      };
    })
    todoService.saveTodos(filteredTodos);
  }; 
});