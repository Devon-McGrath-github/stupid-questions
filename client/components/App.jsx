import React from 'react'
import Question from './Question'

import Questions from '../containers/QuestionsContainer'
import AddQuestion from '../containers/AddQuestionContainer'

export default React.createClass({
  render () {
    return (
      <div>
        <h1>Stupid Questions</h1>
        <Questions />
        <AddQuestion />
        <Question />
      </div>
    )
  }
})
