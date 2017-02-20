// Here we are creating references to all of our NPM packages for our server.js file. 
var express = require ("express");
var methodOverride = require ("method-override");
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');
var mysql = require('mysql');


// Here, we are creating our express server. 
var app = express();

// Here, we are defining our port number for it to listen on. 
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory. 
app.use(express.static(__dirname + "/public"));
// Here, we are going to incorporate our bodyparser NPM package using express. 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json" }));

// Here, we are going to incorporate our method override NPM package using express. 
app.use(methodOverride("_method"));

// Here, we are going to incorporate our handlebars NPM package using express. 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// This variable is pointing to where all of our express routes are located. 
var routes = require('./controllers/burgers_controller')(app);
// Here, we are setting up our server to listen for anything we send on the PORT that we previously definded, which is #3000. 
app.listen(PORT);
