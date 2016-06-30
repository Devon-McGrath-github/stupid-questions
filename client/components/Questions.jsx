import React from 'react'

export default React.createClass({
  render () {
    console.log(this.props.questions);
    return (
      <div>
        <h1>Questions</h1>
          <ul>
          {this.props.questions.map(function (question) {
            return <li><a href="#">{question.content}</a></li>
          })}
          </ul>
          <a href="#"><button>Add Question</button></a>
      </div>
    )
  }
})
