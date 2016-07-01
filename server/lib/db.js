'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQuestions = getQuestions;
exports.getQuestionById = getQuestionById;
exports.getAnswersByQuestionId = getAnswersByQuestionId;
exports.addQuestion = addQuestion;

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

var _knexfile = require('../../knexfile');

var _knexfile2 = _interopRequireDefault(_knexfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getConnection() {
  return (0, _knex2.default)(_knexfile2.default.development);
}

function getQuestions() {
  var connection = getConnection();
  var questions = connection('questions').select().catch(handleError);
  connection.destroy();
  return questions;
}

function getQuestionById(id) {
  var connection = getConnection();
  var question = connection('questions').where('id', '=', id).catch(handleError);
  connection.destroy();
  return question;
}

function getAnswersByQuestionId(id) {
  var connection = getConnection();
  var answers = connection('answers').where('question_id', '=', id).catch(handleError);
  connection.destroy();
  return answers;
}

function addQuestion(question) {
  var connection = getConnection();
  var newQuestion = connection('questions').insert({ content: question }).catch(handleError);
  connection.destroy();
  return newQuestion;
}

function handleError(err) {
  console.error(err);
  return Promise.reject(new Error('There was a database error!'));
}