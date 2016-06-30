import React from 'react'
import questionsData from '../dummy/questions'
import answersData from '../dummy/answers'

export default React.createClass({
  render () {
    let currentQuestion = questionsData[1]
    let answers = 'placeholder'

    return (
      <div>
          <h1>Q:</h1>
          <p>{currentQuestion.content}</p>

          {/* probably going to want to put into seperate components */}
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

              })
              }
          </ul>


      </div>
    )
  }
})
