import { createStore, combineReducers, applyMiddleware } from 'redux'
import {routerReducer} from 'react-router-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import login from '../screens/login/reducer'
import home from '../screens/home/reducer'
import session from '../security/reducer'

//Taken from redux example, this allows handling asynchronous data mode
const middleware = [thunk, logger()]

// Grab the state from a global injected into server-generated HTML
//const initialState = window.__INITIAL_STATE__;
const initialState = {}

// TODO real home reducer
const rootReducer = combineReducers({
  login,
  home,
  session,
  routing: routerReducer
})

export default createStore(rootReducer, initialState, applyMiddleware(...middleware))
