'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');
var app = express();

// Bootstrap the database
require('./database');
require('./seed');

// Serve up static html content
app.use('/', express.static('public'));
app.use(parser.json());

// Mount the api router to the application
app.use('/api', router);

app.listen(3000, function() {
	console.log('The server is running on port 3000');
});
