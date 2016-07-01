import knex from 'knex'
import config from '../../knexfile'

function getConnection () {
  return knex(config.development)
}

export function getQuestions () {
  const connection = getConnection()
  const questions = connection('questions')
    .select()
    .catch(handleError)
  connection.destroy()
  return questions
}

export function getQuestionById (id) {
  const connection = getConnection()
  const question = connection('questions')
    .where('id', '=', id)
    .catch(handleError)
  connection.destroy()
  return question
}

export function getAnswersByQuestionId (id) {
  const connection = getConnection()
  const answers = connection('answers')
    .where('question_id', '=', id)
    .catch(handleError)
  connection.destroy()
  return answers
}

function handleError (err) {
  console.error(err);
  return Promise.reject(new Error('There was a database error!'))
}
