import React from 'react'
import Answers from './Answers'
import AddAnswer from './AddAnswer'

export default React.createClass({
  propTypes: {
    question: React.PropTypes.array
  },
  render () {
    return (
      <div>
        <Link to='/'><button>All Questions</button></Link>
      <div>
      <h1>Q:</h1>
      <p>{this.props.question.content}</p>
      </div>
        <Answers />
        <AddAnswer />
      </div>
    )
  }
})
