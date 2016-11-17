//==============================================================
// BASE SETUP
//==============================================================

// CALL PACKAGES-----------------------------------------------
	var express = require('express'); // call epxress
	var app = express(); // define app
	var bodyParser = require('body-parser'); // reads post contents
	var morgan = require('morgan'); // logs all requests to console
	var mongoose = require('mongoose'); //ORM 
	var path = require('path');
	var port = 80;



	
	
//==============================================================
// APP CONFIG
//==============================================================
	// use bodyparser to grab info from POST requests
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());

	// handle CORS requests(cross origin resource sharing)
	app.use(function(req,res,next){
		res.setHeader('Access-Control-Allow-Origin','*');
		res.setHeader('Access-Control-Allow-Methods','GET,POST');
		res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,Authorization');
		next();
	});

// log all requests to console
	app.use(morgan('dev'));


// DB CONNECT

	//mongoose.connect("mongodb://localhost:27017/sogDocs");

//STATIC FILE LOCATIONS
app.use(express.static(__dirname + '/'));


//==============================================================
// ROUTES FOR API
//==============================================================

//API ROUTES


// var usersApi = require('./components/users/users.api.js')(app,express);
// app.use('/api/users', usersApi);

// var workflowApi = require('./components/workflow/workflow.api.js')(app,express);
// app.use('/api/workflow', workflowApi);

// var docsApi = require('./components/docs/docs.api.js')(app,express);
// app.use('/api/docs', docsApi);


// var docsApi = require('./app/components/docs/docsApi')(app,express);
// app.use('/api/docs',docsApi);

//CATCHALL : sends all routes not defined to front end
//MUST BE REGISTERED AFTER API ROUTES ABOVE^^

// app.get('/',function(req,res){
// 	res.sendFile(path.join(__dirname + '/index.html'));
// });

app.get('*',function(req,res){
	res.sendFile(path.join(__dirname + '/index.html'));
});



//SERVER START
//===============================

 
// app.listen(server_port, server_ip_address, function () {
//   console.log( "Listening on " + server_ip_address + ", server_port " + server_port )
// });

app.listen(port, function(){
	console.log("Listening on port: " + port);
})