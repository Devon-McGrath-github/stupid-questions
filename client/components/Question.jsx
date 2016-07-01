import React from 'react'
import Answers from '../containers/AnswersContainer'
import AddAnswer from '../containers/AddAnswerContainer'

export default React.createClass({
  propTypes: {
    question: React.PropTypes.object
  },
  render () {
    return (
      <div>
        <div>
          <h1>Q:</h1>
          <p>{this.props.question.content}</p>
        </div>
        <Answers />
        <AddAnswer questionId={this.props.question.id}/>
      </div>
    )
  }
})
