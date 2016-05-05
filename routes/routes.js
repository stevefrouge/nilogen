var express = require('express');
var app = express();

var title = "Nilogen Oncosystems"
var appRoot = require('app-root-path');
var path = appRoot + "/views/";
app.get('/', function(req, res, next) {
  res.render('index', { title: title });
});
app.get('/about', function(req, res){
   res.render('about', { title: "About" });
});
app.get('/tech', function(req, res, next) {
  res.render('tech', { title: title });
});
app.get('/news', function(req, res, next) {
  res.render('news', { title: title });
});
app.get('/services', function(req, res, next) {
  res.render('services', { title: title });
});
/*app.get('/views/about', function(req, res){
   res.render(path + 'about', { title: "About" });
});
app.get('/views/test', function(req, res, next) {
  res.render(path + 'test', { title: title });
});
app.get('/views/landing', function(req, res, next) {
  res.render(path + 'landing', { title: title });
});
app.get('/views/tech', function(req, res, next) {
  res.render(path + 'tech', { title: title });
});
app.get('/views/news', function(req, res, next) {
  res.render(path + 'news', { title: title });
});*/









module.exports = app;
