import React from 'react'

export default React.createClass({
  propTypes: {
    questions: React.PropTypes.array
  },
  render () {
    return (
      <div>
        <h1>Questions</h1>
          <ul>
          {this.props.questions.map(function (question) {
            return <li key={question.id}><a href='#'>{question.content}</a></li>
          })}
          </ul>
          <a href='#'><button>Add Question</button></a>
      </div>
    )
  }
})
