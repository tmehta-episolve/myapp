
/**
 * Module dependencies.
 */

var express = require('express')
//  , routes = require('./routes')
//  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
//  , fs = require('fs')
  , mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/mydb');
require('./models/car');
require('./models/phonebook');

var Car = mongoose.model("Car");
var PhoneBook = mongoose.model("PhoneBook");

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
//  app.set('fileUpload', express.static(path.join(__dirname,'upload')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

require('./routes')(app);
//app.get('/', routes.index);
//app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
