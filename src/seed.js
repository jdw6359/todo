'use strict';

var Todo = require('./models/todo');

Todo.remove({}, function() {
    var todos = [
        "Buy some groceries",
        "Go ziplining",
        "Take the dog on a walk"
    ];

    todos.forEach(function(todo, index) {
        Todo.create({name: todo, completed: false});
    });
});
