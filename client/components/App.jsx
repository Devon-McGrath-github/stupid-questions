import React from 'react'

import Questions from '../containers/QuestionsContainer'

export default React.createClass({
  render () {
    return (
      <div id='main'>
        <h1>Stupid Questions</h1>
        {this.props.children}
      </div>
    )
  }
})
