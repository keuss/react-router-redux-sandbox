/**
 * Created by krelix on 14/04/2016.
 */
import types from './actions'

const defaultState = {
  accounts: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_SELECTED_ACCOUNT:
      return Object.assign({}, state,{
        selectedAccount : action.data
      })
    case types.GET_ACCOUNTS_SUCCESS:
      return Object.assign({}, state, {
        accounts: action.data
      })
    default:
      return state
  }
}
