var app			= require('express')(),
	express 	= require('express'),
	http		= require('http'),
	bodyParser	= require('body-parser'),
	server = require('http').Server(app);

var port = process.env.PORT || 3000;
app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var slot = {};
var labs = {};
labs["Yorktown"] = true;
slot["2015-01-01"] = true;

app.get('/isAvailable/:lab/:timestamp', function(req, res) {
	res.send(200);
	/*if (!labs.hasOwnProperty(req.params.lab)) res.send(503);
	else {
		var timestamp = Date.parse(req.params.timestamp)
		if (isNaN(timestamp)==false) {
		    var d = new Date(timestamp);
		    res.send("ok");
		} else {
			res.send(503);
		}
	}*/
});

app.post('/session/login', function(req, res) {

});

server.listen(port, function(){  
	console.log('Express server listening on port '+ port);
});
