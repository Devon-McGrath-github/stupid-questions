import React from 'react'

export default React.createClass({
  render () {

    // placeholder function
    const addAnswer = () => console.log('Add Answer Here')

    return (
      <div>
        <h1>Add New Answer</h1>
        <div>
          <textarea placeholder="type here" rows="10" cols="50"></textarea>
          <span><button onClick={addAnswer}>Add Answer</button></span>
        </div>
      </div>
    )
  }
})
