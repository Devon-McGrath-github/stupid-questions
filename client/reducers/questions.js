import questionsArray from '../dummy/questions'
import * as actions from '../actions'

const INITIAL_STATE = questionsArray

const questions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.ADD_QUESTION:
      let newQuestion = {
        id: state.length + 1,
        content: action.question
      }
      return state.concat([newQuestion])
    default:

  }
  return state
}

export default questions
