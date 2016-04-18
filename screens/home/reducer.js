/**
 * Created by krelix on 14/04/2016.
 */
import types from './actions'

const defaultState = {
  "accounts": []
}

// TODO : Fix reducers...
export default (state = defaultState, action) => {
  let line = action.line
  switch (action.type) {
    case types.ADD_LINE:
      return Object.assign({}, state, {line: [].concat(state.lines, line)})
    case types.DEL_LINE:
      return Object.assign({}, state, {line: state.lines.push(line)})
    case types.UPDATE_LINE:
      return Object.assign({}, state, {line: state.lines.push(line)})
    case types.GET_ACCOUNTS_SUCCESS:
      return Object.assign({}, state, {
        accounts: action.data
      })
    default:
      return state
  }
}
