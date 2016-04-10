import types from './actions'

const defaultState = {
  username: '',
  password: '',
  loading: false,
  error: null
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case types.SET_USERNAME:
      return Object.assign({}, state, {
        username: action.username
      })
    case types.SET_PASSWORD:
      return Object.assign({}, state, {
        password: action.password
      })
    case types.LOGIN_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null
      })
    case types.LOGIN_FAIL:
      return Object.assign({}, state, {
        loading: false,
        error: (
          action.error &&
          action.error.global &&
          action.error.global.length > 0 &&
          action.error.global[0].msg
        ) || null
      })
    case types.LOGIN_SUCCESS:
      return defaultState
    default:
      return state
  }
}
