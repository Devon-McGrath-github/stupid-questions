import React from 'react'
import questions from '../dummy/questions'

export default React.createClass({
  render () {
    // placeholder for this.props that we will be given
    let placeholder = questions[0].content
    // replace with this.props *something*
    //-------------

    let currentQuestion = placeholder

    return (
      <div>
          <h1>Q:</h1>
          <p>{currentQuestion}</p>

          

      </div>
    )
  }
})
