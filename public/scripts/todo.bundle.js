webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('odot', []);

	__webpack_require__(3);
	__webpack_require__(6);
	__webpack_require__(8);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var app = __webpack_require__(1).module('odot');

	app.controller('MainController', __webpack_require__(4));
	app.controller('TodoController', __webpack_require__(5));

/***/ },
/* 4 */
/***/ function(module, exports) {

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


/***/ },
/* 5 */
/***/ function(module, exports) {

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
	    TodoService.saveTodos(filteredTodos);
	  }; 
	}

	module.exports = TodoController;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var app = __webpack_require__(1).module('odot');

	app.directive('odotTodoList', __webpack_require__(7));


/***/ },
/* 7 */
/***/ function(module, exports) {

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


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var app = __webpack_require__(1).module('odot');

	app.service('TodoService', __webpack_require__(9));


/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	TodoService.$inject = ['$http'];
	function TodoService($http) {
	  
	  this.getTodos = function(cb) {
	    $http.get('/api/todos').then(cb);
	  };
	  
	  this.deleteTodo = function(todo) {
	    console.log("I deleted the " + todo.name + " todo!");
	  };
	  
	  this.saveTodos = function(todos) {
	    console.log("I saved " + todos.length + " todos!");
	  };
	}

	module.exports = TodoService;


/***/ }
]);