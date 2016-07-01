import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import answers from './answers'
import questions from './questions'

const appReducer = combineReducers({
  routing: routerReducer,
  questions,
  answers
})

export default appReducer
