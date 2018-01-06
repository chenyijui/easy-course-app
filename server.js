var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
// Require  routes

// create express app
var app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


app.use(cors({
	methods: ['GET', 'POST', 'PATCH', 'OPTION', 'DELETE', 'PUT'],
	credentials: true,
	origin: true
}));

// Require User routes
require('./app/routes/user.routes.js')(app);
require('./app/routes/course.routes.js')(app);
//var func = require('./app/routes.js');
//func(app);

// Configuring the database
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');



mongoose.connect(process.env.MONGODB_URI || dbConfig.url,{
  useMongoClient: true
});

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})
// define a simple route
app.get('/', function(req, res){
    res.json({"message": "Welcome to EasyCourse application."});
});

// listen for requests
app.listen(process.env.PORT || 3000, function(){
    console.log("Server is listening on port 3000");
});
