import React from 'react'

// fake state - refactor when redux is implemented
import questionsData from '../dummy/questions'
import answersData from '../dummy/answers'
// ---------------


export default React.createClass({
  render () {

    // props placeholder. replace with this.props *something*
    let currentQuestion = questionsData[1]

    return (
      <div>
        <h1>Answers:</h1>

        <ul>
          {answersData.map((answer) => {
            if (answer.questionId === currentQuestion.id) {
              return (
                <li key={answer.id}>
                  {answer.content} {' '}
                </li>
               )
            }
          })}
        </ul>
      </div>
    )
  }
})
