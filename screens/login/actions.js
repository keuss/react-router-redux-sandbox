import ActionType from '../../shared/ActionType'


const types = ActionType.create(
  'SET_USERNAME',
  'SET_PASSWORD',

  'LOGIN_REQUEST',
  'LOGIN_FAIL',
  'LOGIN_SUCCESS',

  'LOGIN'
)

export default types

export const setUsername = (username) =>
  ({
    type: types.SET_USERNAME,
    username: username
  })

export const setPassword = (password) =>
  ({
    type: types.SET_PASSWORD,
    password: password
  })

export const loginError = (error) =>
  ({
    type: types.LOGIN_FAIL,
    error: error
  })

export const loginRequest = () =>
  ({
    type: types.LOGIN_REQUEST
  })

export const login = (username, password) =>
  (dispatch, getState) => {
    // TODO
    console.log('login with : ' + username + ', and ' + password);
  }
