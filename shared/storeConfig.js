import { createStore, combineReducers, applyMiddleware } from 'redux'
import {routerReducer} from 'react-router-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import login from '../screens/login/reducer'
import * as home from '../reducers';

//Taken from redux example, this allows handling asynchronous data mode
const middleware = [thunk, logger()]

const rootReducer = combineReducers({
  login,
  home,
  routing: routerReducer
})

export default createStore(rootReducer, {}, applyMiddleware(...middleware))
