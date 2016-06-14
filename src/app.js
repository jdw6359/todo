'use strict';

var express = require('express');
var app = express();
var router = express.Router();

// Serve up static html content
app.use('/', express.static('public'));

// Define routes for api
router.get('/todos', function(req, res) {
	res.json({todos: []});
})

// TODO: Add a POST route to create new entries
// TODO: Add a PUT route to update existing entries
// TODO: Add a DELETE route to delete existing entries

// Mount the api router to the application
app.use('/api', router);

app.listen(3000, function() {
	console.log('The server is running on port 3000');
});