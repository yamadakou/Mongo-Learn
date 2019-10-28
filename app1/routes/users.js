var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST user adding. */
router.post('/', function(req, res, next) {
  res.send('POST method after respond with a resource');
});

module.exports = router;
