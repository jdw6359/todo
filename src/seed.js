'use strict';

var Todo = require('./models/todo');

var todos = [
    "Buy some groceries",
    "Go ziplining",
    "Take the dog on a walk"
];

todos.forEach(function(todo, index) {
    Todo.find({name: todo}, function(err, todos) {
        if(!err && !todos.length) {
            Todo.create({name: todo, completed: false});
        }
    })
})