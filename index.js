import * as ES6Promise from 'es6-promise'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

import * as reducers from './reducers'
import {App, Home, Foo, Bar} from './components'
import Login from './screens/login/Login';

//Enable ES2016 Promises
ES6Promise.polyfill()

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(
  reducer
)

const history = syncHistoryWithStore(browserHistory, store)

const isAuthenticated = function() {
  console.log("Checking if user is authenticated...");
  return true;
}

console.log('index.js ...')
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <Route path="home" component={Home} onEnter={isAuthenticated}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('container')
)
