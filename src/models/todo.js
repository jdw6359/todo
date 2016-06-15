'use strict';

var mongoose = require('mongoose');

// Register the Todo schema
var todoSchema = new mongoose.Schema({
	name: String,
	completed: Boolean
});

var model = new mongoose.Model('Todo', todoSchema);

module.exports = model;