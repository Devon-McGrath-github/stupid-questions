import React from 'react'
import { Link } from 'react-router'

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
              {console.log('here', question)}
            return <li key={question.id}><Link to='Question'>{question.content}</Link></li>
          })}
          </ul>
          <Link to='AddQuestion'><button>Add Question</button></Link>
      </div>
    )
  }
})
