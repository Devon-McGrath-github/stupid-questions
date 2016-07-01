import React from 'react'

AddQuestion.PropTypes = {
  addQuestion: React.PropTypes.func
}

export default function AddQuestion (props) {
  let textInput = ''
  return (
    <div>
    <h1>Giz us a question</h1>
      <form onSubmit= {e => {
        e.preventDefault()
        if (textInput.value.trim()) {
          let question = textInput.value
          props.addQuestion(question)
        } }}>
         <input ref={input => { textInput = input } } />
         <button type='submit'>Submit</button>
        </form>
     </div>
  )
}
