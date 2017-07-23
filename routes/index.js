var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/whoami', function(req, res) {
  var data  = {address: req.ip,
               language: req.acceptsLanguages()[0],
               software: "OS: " + req.useragent.os + ", Browser: " + req.useragent.browser}
  res.json(data);
});

module.exports = router;
