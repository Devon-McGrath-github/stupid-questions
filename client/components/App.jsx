import React from 'react'
import Question from './Question'

import Questions from '../containers/QuestionsContainer'
import questionList from '../dummy/questions'
import AddQuestion from './Add-question'

export default React.createClass({
  render () {
    return (
      <div>
        <h1>Stupid Questions</h1>
        <Questions questions={questionList}/>
        <AddQuestion />
        <Question question={questionList[0]}/>
      </div>
    )
  }
})
