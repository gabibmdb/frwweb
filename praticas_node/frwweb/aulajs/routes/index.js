var express = require('express');
var router = express.Router();

// GET home
router.get('/', function(req, res, next) {
  res.send('index');
});

router.get('/teste', function(req, res, next) {
  res.send('teste');
});

module.exports = router;