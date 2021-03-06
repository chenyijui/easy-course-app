const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const keys = require('./config/keys');
const authRoutes = require('./app/routes/auth');
const passportSetup = require('./config/passport');
const path = require('path');
const passport = require('passport');
const cookieSession = require('cookie-session');

// create express app
const app = express();
//set up view engine
app.set('views', path.resolve(__dirname, './app/views'));
app.set('view engine', 'ejs');
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

//set cookieSession
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys:[keys.session.cookieKey],
}));

app.use(cors({
	methods: ['GET', 'POST', 'PATCH','DELETE', 'PUT'],
	credentials: true,
	origin: true
}));


//initialize passport
app.use(passport.initialize());
app.use(passport.session());
// auth routes
app.use('/auth', authRoutes);

// Require User routes
require('./app/routes/user.routes.js')(app);
require('./app/routes/course.routes.js')(app);
//var func = require('./app/routes.js');
//func(app);

// Configuring the database
const mongoose = require('mongoose');



mongoose.connect(process.env.MONGODB_URI || keys.dbconfig.url,{
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
    res.render('home');
});

// listen for requests
app.listen(process.env.PORT || 3000, function(){
    console.log("Server is listening on port 3000");
});
