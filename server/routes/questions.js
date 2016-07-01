var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getQuestions()
    .then(function (questions) {
      res.json(questions)
    })
})

router.get('/:id', function (req, res) {
  var id = parseInt(req.params.id)
  db.getQuestionById(id)
    .then(function (question) {
      res.json(question)
      })
})

router.post('/', function (req, res) {
  var data = db.getThings()
  data.push({id: 4})
  res.send(data)
})


module.exports = router
