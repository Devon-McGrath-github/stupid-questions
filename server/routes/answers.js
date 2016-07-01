var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  if(req.query.qid) {
    var id = req.query.qid
    db.getAnswersByQuestionId(id)
      .then(function (answers) {
        if(answers.length) {
          res.json(answers)
        } else {
          res.sendStatus(404)
        }
      })
  } else {
    res.sendStatus(404)
  }
})

router.post('/', function (req, res) {
  var id = req.body.question_id
  var answer = req.body.content
  db.addAnswer(id, answer)
    .then(function () {
      res.sendStatus(200)
    })
    .catch(function(err) {
      res.status(500).send(err)
    })
})

module.exports = router
