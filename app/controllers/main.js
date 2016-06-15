'use strict';

MainController.$inject = ['$scope', 'TodoService'];
function MainController($scope, TodoService) {

  TodoService.getTodos(function(response){
    $scope.todos = response.data.todos;
  });
  
  $scope.addTodo = function() {
    $scope.todos.unshift({
      name: "This is a new todo.",
      completed: false
    });
  };
}

module.exports = MainController;
