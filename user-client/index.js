var request = require('request')
var express = require('express');
var app = express();

var userServiceHost = 'user-service:8081'

app.get('/test', function(req, res) {
	request({
		url: 'http://' + userServiceHost + '/user'
	}, function(error, response, body) {
		res.send(body)
	});
});

app.listen(8080, function() {
	console.log('user client listening on port 8080');
});