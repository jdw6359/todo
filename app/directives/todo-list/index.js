'use strict';

TodoList.$inject = [];
function TodoList() {
  return {
    templateUrl: 'templates/todo-list.html',
    replace: true,
    controller: 'TodoController'
  }
}

module.exports = TodoList;
