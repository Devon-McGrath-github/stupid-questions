import React from 'react'

export default React.createClass({
  propTypes: {
    questionId: React.PropTypes.number,
    addAnswer: React.PropTypes.func
  },
  render () {
    const addAnswer = () => this.props.addAnswer(this.input.value, this.props.questionId)
    return (
      <div>
        <h1>Add New Answer</h1>
        <div>
          <textarea ref={(input) => { this.input = input }} placeholder='type here' rows='10' cols='50'></textarea>
          <span><button onClick={addAnswer}>Add Answer</button></span>
        </div>
      </div>
    )
  }
})
