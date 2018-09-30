var os = require("os");
var express = require('express');
var app = express();

var hostname = os.hostname();

app.get('/user', function (req, res) {
  res.send(hostname);
});

app.listen(8081, function () {
  console.log('user service listening on port 8081');
});