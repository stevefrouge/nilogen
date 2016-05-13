var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

//var ContactDao = require('./models/contactDao');
var Contact = require('./routes/contact');
//var appRoot = require('app-root-path');

//var routes = require('./routes/index');
//var users = require('./routes/users');
//var test = require('./routes/test');
//var landing = require('./routes/landing');
var routes = require('./routes/routes')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
app.use(routes);

app.post('/view1', function(req, res) {
    console.log(req.body.desc);
    res.end();
});

//var contactDao = new ContactDao();
//var contact = new Contact(contactDao);
//app.post('/contact', contact.contact.bind(contact));
//app.use('/', routes);
//app.use('/users', users);
//app.use('/views/landing', landing);
//app.use('/views/test',test);
//app.get('/views/about', function(req, res){
//   res.render('about', { title: 'Express' });
//});

/*var title = "Nilogen"
app.get('/', function(req, res, next) {
  res.render('index', { title: title });
});
app.get('/views/about', function(req, res){
   res.render('about', { title: title });
});

app.get('/views/test', function(req, res, next) {
  res.render('test', { title: title });
});

app.get('/views/landing', function(req, res, next) {
  res.render('landing', { title: title });
});
app.get('/views/tech', function(req, res, next) {
  res.render('tech', { title: title });
});
app.get('/views/news', function(req, res, next) {
  res.render('news', { title: title });
});*/






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
