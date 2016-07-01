export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'

export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question: question
  }
}

export function addAnswer (answer, questionId) {
  return {
    type: ADD_ANSWER,
    questionId: questionId,
    answer: answer
  }
}
