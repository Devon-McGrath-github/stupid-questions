inport questions from '../dummy/questions'
inport answers from '../dummy/answers'

const INITIAL_STATE = {
  questions: questions,
  answers: answers
}

export default (state = INITIAL_STATE, action) => {
  return state
}
