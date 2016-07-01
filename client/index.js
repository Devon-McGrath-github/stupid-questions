import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import appReducer from './reducers'

let store = createStore(appReducer)

document.addEventListener('DOMContentLoaded', () => {
  render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('app')
  )
})
