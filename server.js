var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var port = 9999;

app.set('view engine', 'ejs');
app.set(express.static(__dirname + '/public'));

app.get('/', function(request, response){
	response.render('index', request.query);
});

server.listen(port, function(){
	console.log('running server on port ' + port);
});