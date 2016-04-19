import types from './actions'

const defaultState = {
  context: null,
  loading: false,
  error: null
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case types.GET_SESSION_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null
      })
    case types.GET_SESSION_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error || "Unknown error"
      })
    case types.GET_SESSION_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        context: action.profile
      })
    default:
      return state
  }
}
