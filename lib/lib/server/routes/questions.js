'use strict';

var express = require('express');
var router = express.Router();

var db = require('../db');

router.get('/', function (req, res) {
  res.json(db.getThings());
});

router.post('/', function (req, res) {
  var data = db.getThings();
  data.push({ id: 4 });
  res.send(data);
});

router.get('/:id', function (req, res) {
  var id = parseInt(req.params.id) - 1;
  var data = db.getThings();
  res.json(data[id]);
});

module.exports = router;