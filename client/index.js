import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import reducer from './reducer'
import AddQuestion from './components/Add-question'
import Question from './components/Question'
import Questions from './components/Questions'

let store = createStore(
  reducer, compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Questions} />
          <Route path='AddQuestion' component={AddQuestion} />
          <Route path='Question' component={Question} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
