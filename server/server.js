var express = require('express');
app = express();
var http = require('http').Server(app);
var morgan = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');

var port     = process.env.PORT || 8083;

console.log("from serverjs");
app.use(morgan('dev'));

//app.use(express.static('./public/')); //public folder run by gulp
//app.use(express.static('./client/')); //client folder also taken as static 
app.use('/bower_components', express.static('./bower_components'));

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.use(session({ secret: "mjt", resave: false, saveUninitialized: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


require('./app/routes.js')(app);

http.listen(port,function(){
  console.log('listening on *:'+port);
});  
 
