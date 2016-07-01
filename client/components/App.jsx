import React from 'react'

import Questions from '../containers/QuestionsContainer'
import AddQuestion from '../containers/AddQuestionContainer'
import Question from './Question'
import questionList from '../dummy/questions.js'

export default React.createClass({
  render () {
    return (
      <div>
        <h1>Stupid Questions</h1>
        <Questions />
        <AddQuestion />
        <Question question={questionList[0]} />
      </div>
    )
  }
})
