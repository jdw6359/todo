'use strict';

var express = require('express');
var router = express.Router();

// Access all defined models
var Todo = require('../models/todo');

// Grab the mock data
//var todos = require('../../mock/todos.json');

// Define routes for api

// GET /todos
router.get('/todos', function(req, res) {
    Todo.find({}, function(err, todos) {
        if(err) {
            return res.status(500).json({error: err.message});
        }
        res.json({todos: todos});
    });
});

// POST /todos
router.post('/todos', function(req, res) {
    var todo = req.body;
    Todo.create(todo, function(err, todo) {
        if(err) {
            return res.status(500).json({error: err.message});
        }
        res.json({todo: todo, message: 'Todo created!'});
    });
})

// PUT /todos/:id
router.put('/todos/:id', function(req, res) {
    var id = req.params.id;
    var todo = req.body;

    if(todo && todo._id !== id) {
        return res.status(500).json({error: 'Ids do not match'});
    }
    Todo.findByIdAndUpdate(id, todo, {new: true}, function(err, todo) {
        if(err) {
            return res.status(500).json({error: err.message});
        }
        res.json({todo: todo, message: 'Todo created!'});
    });
});

// TODO: Add a DELETE route to delete existing entries

module.exports = router;
