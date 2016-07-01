var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  if(req.query.qid) {
    var id = req.query.qid
    db.getAnswersByQuestionId(id)
      .then(function (answers) {
        res.json(answers)
      })
  } else {
    res.sendStatus(404)
  }
})

router.post('/', function (req, res) {
  var question = req.body
  res.send(question)
})

module.exports = router
