var express = require('express');
var app = express();

var title = "Nilogen"
var appRoot = require('app-root-path');
var path = appRoot + "/views/";
app.get('/', function(req, res, next) {
  res.render(path + 'index', { title: title });
});
app.get('/views/about', function(req, res){
   res.render(path + 'about', { title: title });
});
/* GET home page. */
app.get('/views/test', function(req, res, next) {
  res.render(path + 'test', { title: title });
});
/* GET home page. */
app.get('/views/landing', function(req, res, next) {
  res.render(path + 'landing', { title: title });
});
app.get('/views/tech', function(req, res, next) {
  res.render(path + 'tech', { title: title });
});
app.get('/views/news', function(req, res, next) {
  res.render(path + 'news', { title: title });
});






module.exports = app;
