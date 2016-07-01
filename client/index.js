import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import Question from './containers/QuestionContainer'
import Questions from './containers/QuestionsContainer'
import AddQuestion from './containers/AddQuestionContainer'
import appReducer from './reducers'

let store = createStore(
  appReducer, compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const history = syncHistoryWithStore(browserHistory, store)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={App}>
          <IndexRoute component={Questions} />
          <Route path='add-question' component={AddQuestion} />
          <Route path='question/:id' component={Question} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
