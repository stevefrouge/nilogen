var express = require('express');
var app = express();
var title = "Nilogen Oncosystems"
var appRoot = require('app-root-path');
var path = appRoot + "/views/";

var Contact = require(appRoot + "/routes/contact.js");
var contact = new Contact();

app.get('/', function(req, res, next) {
  res.render(path + 'index', { title: title });
});
app.get('/about', function(req, res){
   res.render(path + 'about', { title: "About" });
});
app.get('/contact', function(req, res){
   res.render(path + 'contact', { title: "Contact" });
});
app.get('/tech', function(req, res, next) {
  res.render(path + 'tech', { title: "Technology" });
});
app.get('/news', function(req, res, next) {
  res.render(path + 'news', { title: "News" });
});
app.get('/services', function(req, res, next) {
  res.render(path + 'services', { title: "Services" });
});
app.get('/team', function(req, res, next) {
  res.render(path + 'team', { title: "Team" });
});
app.post('/contact',function(req, res, next){
    var x = contact;
    contact.recievecontactform(req,res);
    var d = req.body;
  
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
