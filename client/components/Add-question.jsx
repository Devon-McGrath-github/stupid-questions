import React from 'react'

export default function AddQuestion () {
  let textInput = ''
  return (
    <div>
    <h1>Giz us a question</h1>
      <form onSubmit= {e => {
        e.preventDefault()
        if (textInput.value.trim()) {
          let question = textInput.value
          console.log(question)
        } }}>
         <input ref={input => { textInput = input } } />
         <Link to='/'><button type='submit'>Submit</button></Link>
        </form>
     </div>
  )
}
