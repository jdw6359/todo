'use strict';

var express = require('express');
var router = express.Router();

// Access all defined models
var Todo = require('../models/todo');

// Grab the mock data
var todos = require('../../mock/todos.json');

// Define routes for api
router.get('/todos', function(req, res) {
    Todo.find({}, function(err, todos) {
        if(err) {
            return res.status(500).json({message: err.message});
        }
        res.json({todos: todos});
    });
});

// TODO: Add a POST route to create new entries
// TODO: Add a PUT route to update existing entries
// TODO: Add a DELETE route to delete existing entries

module.exports = router;
