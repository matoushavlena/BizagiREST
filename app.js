var app			= require('express')(),
	express 	= require('express'),
	http		= require('http'),
	bodyParser	= require('body-parser'),
	server = require('http').Server(app);

var port = process.env.PORT || 3000;
app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    console.log(req.originalUrl);
    next();
});

var dayslots = {};
dayslots["Yorktown"] = {};
dayslots["Tokyo"] = {};
dayslots["Haifa"] = {};
dayslots["Zurich"] = {};
dayslots["Almaden"] = {};
dayslots["Nairobi"] = {};
dayslots["Beijing"] = {};
dayslots["Sydney"] = {};
dayslots["Yorktown"]["01-01-2015"] = true;

app.get('/isAvailable/:lab/:month/:day/:year', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	if (dayslots.hasOwnProperty(req.params.lab)) {
		var date = req.params.month+"-"+req.params.day+"-"+req.params.year;
		if (dayslots[req.params.lab].hasOwnProperty(date)) res.end(JSON.stringify({available: false}));
		else res.end(JSON.stringify({available: true}));
	} else res.send(503);
});

server.listen(port, function(){  
	console.log('Express server listening on port '+ port);
});

