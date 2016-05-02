var express = require('express');
var app = express();

var title = "Nilogen"


app.get('/', function(req, res, next) {
  res.render('index', { title: title });
});
app.get('/views/about', function(req, res){
   res.render('about', { title: title });
});
/* GET home page. */
app.get('/views/test', function(req, res, next) {
  res.render('test', { title: title });
});
/* GET home page. */
app.get('/views/landing', function(req, res, next) {
  res.render('landing', { title: title });
});
app.get('/views/tech', function(req, res, next) {
  res.render('tech', { title: title });
});
app.get('/views/news', function(req, res, next) {
  res.render('news', { title: title });
});






module.exports = app;
