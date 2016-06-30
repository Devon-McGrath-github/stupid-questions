import questions from './dummy/questions'
import answers from './dummy/answers'

const INITIAL_STATE = {
  questions: questions,
  answers: answers
}

export default (state = INITIAL_STATE, action) => {
  return state
}
