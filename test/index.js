import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import questionsReducer from '../client/reducers/questions'
import { addQuestion } from '../client/actions'

// import App from '../client/components/App'

// test('<App />', t => {
//   const expected = 'Things'
//   const wrapper = shallow(React.createElement(App))
//   t.is(wrapper.find('h1').text(), expected)
// })

test('questionsReducer', t => {
  const beforeState = []
  const expectedAfterState = [{
    id: 1,
    content: 'What is me?' }]
    let actualAfterState = questionsReducer(beforeState, addQuestion('What is me?'))
    t.deepEqual(actualAfterState, expectedAfterState)
})
