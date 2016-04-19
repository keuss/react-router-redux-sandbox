import * as ES6Promise from 'es6-promise'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'


import { App } from './components'
import Login from './screens/login/Login'
import Home from './screens/home/Home'
import store from './shared/storeConfig'

//Enable ES2016 Promises
ES6Promise.polyfill()

// browserHistory requires routing on the server side when users access certain URLs
// hashHistory uses the # sign to determine the route
const history = syncHistoryWithStore(hashHistory, store)

const passAuth = function(store, nextState, replace){
  if(store.getState().login && store.getState().login.token) {
    console.log("User already authenticated, returning home")
    replace({
      pathname: '/home',
      state : Object.assign({}, nextState, {nextPathname: nextState.location.pathname})
    })
  } else {
    // User not authenticated
    return
  }
}

const checkAuth = function(store, nextState, replace) {
  if(store.getState().login && store.getState().login.token) {
    return
  } else {
    console.warn("User not authenticated, returning to login screen")
    replace({
      pathname: '/',
      state : Object.assign({}, nextState, {nextPathname: nextState.location.pathname})
    })
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} onEnter={(nextState, replace) => passAuth(store, nextState, replace)}/>
        <Route path="home" component={Home} onEnter={(nextState, replace) => checkAuth(store, nextState, replace)}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('container')
)
