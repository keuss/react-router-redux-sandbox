import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//Taken from redux example, this allows handling asynchronous data mode
const middleware = [thunk, logger()];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default function(rootReducer, initialState){
  return {store: createStoreWithMiddleware(rootReducer, initialState)};
}
