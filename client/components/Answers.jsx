import React from 'react'

export default React.createClass({
  propTypes: {
    answers: React.PropTypes.array
  },
  render () {
    return (
      <div>
        <h1>Answers:</h1>
        <ul>
          {this.props.answers.map((answer) => {
            return (
              <li key={answer.id}>
                {answer.content}
              </li>
            )
          }
          )}
        </ul>
      </div>
    )
  }
})
