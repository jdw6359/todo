'use strict';

var express = require('express');
var router = require('./api');
var app = express();

// Serve up static html content
app.use('/', express.static('public'));

// Mount the api router to the application
app.use('/api', router);

app.listen(3000, function() {
	console.log('The server is running on port 3000');
});
