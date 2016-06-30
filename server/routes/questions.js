var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/questions', function (req, res) {
  res.json(db.getThings())
})

router.get('/questions/:id', function (req, res) {
  res.json(db.getThings())
})

router.get('/answers/?qid', function (req, res) {
  res.json(db.getThings())
})

router.post('/questions', function (req, res) {
  res.json(db.getThings())
})

router.post('/answers', function (req, res) {
  res.json(db.getThings())
})

module.exports = router


// GET /v1/questions
// GET /v1/questions/:id
// POST /v1/questions
// POST /v1/answers
// GET /v1/answers/?qid
