import React from 'react'

export default React.createClass({
  propTypes: {
    addQuestion: React.PropTypes.func
  },
  render () {
    console.log(this.props)
    let textInput = ''
    return (
      <div>
      <h1>Giz us a question</h1>
        <form onSubmit= {e => {
          e.preventDefault()
          if (textInput.value.trim()) {
            let question = textInput.value
            this.props.addQuestion(question)
          } }}>
           <input ref={input => { textInput = input } } />
           <button type='submit'>Submit</button>
          </form>
       </div>
      )
  }
})
