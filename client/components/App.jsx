import React from 'react'

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
