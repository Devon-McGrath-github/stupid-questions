import React from 'react'
import Answers from './Answers'
import AddAnswer from './Add-Answer'

// fake state - refactor when redux is implemented
import questionsData from '../dummy/questions'
import answersData from '../dummy/answers'
// -------------------

export default React.createClass({
  render () {

    // props placeholder
    let currentQuestion = questionsData[1]

    return (
      <div>

        <div>
          <h1>Q:</h1>
          <p>{currentQuestion.content}</p>
        </div>

        <Answers />
        <AddAnswer />

      </div>
    )
  }
})
