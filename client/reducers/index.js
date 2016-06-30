import { combineReducers } from 'redux'

import answers from './answers'
import questions from './questions'

const appReducer = combineReducers({
  questions,
  answers
})

export default appReducer
