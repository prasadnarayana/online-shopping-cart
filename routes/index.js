var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send("Hello World from Online shopping cart project");
});

module.exports = router;
