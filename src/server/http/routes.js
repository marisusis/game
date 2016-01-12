var express = require('express');
var router = express.Router();
var colors = require('colors');
var path = require('path');
var log = require('util').log;

router.get('/*', function (req, res) {
  log('User requested: '.white +req.path.red.bold);
  res.sendFile(path.resolve('dist/web' + req.path));
});

module.exports = router;