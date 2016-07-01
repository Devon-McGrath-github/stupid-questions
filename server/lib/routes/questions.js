'use strict';

var express = require('express');
var router = express.Router();

var db = require('../db');

router.get('/', function (req, res) {
  db.getQuestions().then(function (questions) {
    res.json(questions);
  });
});

router.get('/:id', function (req, res) {
  var id = parseInt(req.params.id);
  db.getQuestionById(id).then(function (question) {
    res.json(question);
  });
});

router.post('/', function (req, res) {
  var question = req.body;
  db.addQuestion(question.content).then(function () {
    res.sendStatus(200);
  }).catch(function (err) {
    res.status(500).send(err);
  });
});

module.exports = router;