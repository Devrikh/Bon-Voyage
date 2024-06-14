var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/schedule', function(req, res, next) {
  res.render('schedule', { title: 'Express' });
});
router.get('/drive', function(req, res, next) {
  res.render('drive', { title: 'Express' });
});

module.exports = router;
