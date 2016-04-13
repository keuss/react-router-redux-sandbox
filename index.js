import * as ES6Promise from 'es6-promise'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'


import {App, Home, Foo, Bar} from './components'
import Login from './screens/login/Login';
import store from './shared/storeConfig';

//Enable ES2016 Promises
ES6Promise.polyfill()

const history = syncHistoryWithStore(browserHistory, store)

const passAuth = function(store, nextState, replace){
  if(store.getState().login && store.getState().login.token) {
    console.log("User already authenticated, returning home");
    replace({
      pathname: '/home',
      state : Object.assign({}, nextState, {nextPathname: nextState.location.pathname})
    });
  } else {
    // User not authenticated
    return;
  }
}

const checkAuth = function(store, nextState, replace) {
  if(store.getState().login && store.getState().login.token) {
    return;
  } else {
    console.warn("User not authenticated, returning to login screen")
    //
    replace({
      pathname: '/',
      state : Object.assign({}, nextState, {nextPathname: nextState.location.pathname})
    });
  }
}

console.log('index.js ...')
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} onEnter={(nextState, replace) => passAuth(store, nextState, replace)}/>
        <Route path="home" component={Bar} onEnter={(nextState, replace) => checkAuth(store, nextState, replace)}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('container')
)
