var knex = require('knex');
var config = require('../knexfile');

module.exports = {
  getQuestions: getQuestions,
  getQuestionById: getQuestionById,
  getAnswersByQuestionId: getAnswersByQuestionId,
  addQuestion: addQuestion
}

function getConnection () {
  return knex(config.development)
}

function getQuestions () {
  const connection = getConnection()
  const questions = connection('questions')
    .select()
    .catch(handleError)
  connection.destroy()
  return questions
}

function getQuestionById (id) {
  const connection = getConnection()
  const question = connection('questions')
    .where('id', '=', id)
    .catch(handleError)
  connection.destroy()
  return question
}

function getAnswersByQuestionId (id) {
  const connection = getConnection()
  const answers = connection('answers')
    .where('question_id', '=', id)
    .catch(handleError)
  connection.destroy()
  return answers
}

function addQuestion (question) {
  const connection = getConnection()
  const newQuestion = connection('questions')
    .insert({content: question})
    .catch(handleError)
  connection.destroy()
  return newQuestion
}

function handleError (err) {
  console.error(err);
  return Promise.reject(new Error('There was a database error!'))
}
