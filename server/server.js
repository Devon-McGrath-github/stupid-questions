var express = require('express')
var bodyParser = require('body-parser')

var path = require('path')

var questions = require('./routes/questions')

var PORT = process.env.PORT || 3000
var app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'static')))
app.use('/v1', questions)

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
