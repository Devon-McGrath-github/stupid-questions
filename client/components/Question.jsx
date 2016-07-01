import React from 'react'
import { Link } from 'react-router'

import Answers from './Answers'
import AddAnswer from '../containers/AddAnswerContainer'

export default React.createClass({
  propTypes: {
    question: React.PropTypes.object
  },
  render () {
    return (
      <div>
        <Link to='/'><button>All Questions</button></Link>
        <div>
        <h1>Q:</h1>
        <p>{this.props.question.content}</p>
        </div>
        <Answers answers={this.props.answers} />
        <AddAnswer questionId={this.props.question.id}/>
      </div>
    )
  }
})
