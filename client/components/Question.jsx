import React from 'react'
import Answers from './Answers'
import AddAnswer from './Add-Answer'

export default React.createClass({
  render () {

    return (
      <div>

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
