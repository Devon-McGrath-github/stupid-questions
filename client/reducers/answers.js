import answersArray from '../dummy/answers'
import * as actions from '../actions'

const INITIAL_STATE = answersArray

const answers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.ADD_ANSWER:
      const newAnswer = {
        id: state.length + 1,
        questionId: action.questionId,
        content: action.answer
      }
      return state.concat([newAnswer])
    default:
      return state
  }
}

export default answers
