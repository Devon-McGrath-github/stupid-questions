import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    // placeholder function
    const addAnswer = () => console.log('Add Answer Here')

    return (
      <div>
        <h1>Add New Answer</h1>
        <div>
          <textarea placeholder="type here" rows="10" cols="50"></textarea>
          <Link to='Question'><button onClick={addAnswer}>Add Answer</button></Link>
        </div>
      </div>
    )
  }
})
