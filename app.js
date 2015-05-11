var app			= require('express')(),
	express 	= require('express'),
	http		= require('http'),
	bodyParser	= require('body-parser');

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/session', function(req, res) {

});

app.post('/session/login', function(req, res) {

});


server.listen(process.env.PORT, function(){  
	console.log('Express server listening on port '+ process.env.PORT);
});
