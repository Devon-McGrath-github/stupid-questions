import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import reducer from './reducer'
import AddQuestion from './containers/AddQuestionContainer'
import Answers from './containers/AnswersContainer'
import Questions from './containers/QuestionsContainer'

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
        <Route path="/" component={App}>
          <IndexRoute component={Questions} />
          <Route path="AddQuestion" component={AddQuestion} />
          <Route path="Answers" component={Answers} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
