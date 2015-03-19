var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var port = process.env.PORT || 9999;

app.set('view engine', 'ejs');
app.set(express.static(__dirname + '/app'));
app.use("/css", express.static(__dirname + '/app/css'));
app.use("/js", express.static(__dirname + '/app/js'));
app.use("/img", express.static(__dirname + '/app/img'));


app.get('/', function(request, response){
	response.render('index', request.query);
});

server.listen(port, function(){
	console.log('running server on port ' + port);
});