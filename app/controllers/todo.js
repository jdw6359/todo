'use strict';

TodoController.$inject = ['$scope', 'TodoService'];
function TodoController($scope, TodoService) {
  
  $scope.deleteTodo = function(todo, index) {
    $scope.todos.splice(index, 1);
    TodoService.deleteTodo(todo);
  };
  
  $scope.saveTodos = function() {
    var filteredTodos = $scope.todos.filter(function(todo){
      if(todo.edited) {
        return todo
      };
    })
    TodoService.saveTodos(filteredTodos).finally($scope.resetTodoState());
  };

  $scope.resetTodoState = function() {
    console.log('reset todo state being invoked');
    $scope.todos.forEach(function(todo) {
      todo.edited = false;
    })
  }
}

module.exports = TodoController;
