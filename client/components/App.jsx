import React from 'react'

import Questions from './Questions'
import questionList from '../dummy/questions'

export default React.createClass({
  render () {
    return (
      <div className="app">
        <h1>Things</h1>
        <Questions questions={questionList}/>
      </div>
    )
  }
})
