var express = require('express');
var router = express.Router();

/* GET home page. */




router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile('./public/app/index.html');
});


//router.get('*', function(req, res, next) {
//  res.sendfile('./public/app/index.html');
//});


module.exports = router;
