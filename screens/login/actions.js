import ActionType from '../../shared/ActionType'
import { hashHistory } from 'react-router'

import api from '../../shared/api'
import {getSession} from '../../security/actions'

const types = ActionType.create(
  'SET_USERNAME',
  'SET_PASSWORD',

  'LOGIN_REQUEST',
  'LOGIN_FAIL',
  'LOGIN_SUCCESS'
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

export const loginSuccess = () =>
  ({
    type: types.LOGIN_SUCCESS
  })

export const login = (username, password) =>
  (dispatch, getState) => {
    dispatch(loginRequest())
    api.getJSON('users', '', {name: username, pwd: password})
      .then( (response) => {
      if(response && response.length > 0) {
        // Fake session
        getSession()(dispatch, getState)
        dispatch(loginSuccess())
        hashHistory.push('/home')
      } else {
        dispatch(loginError("No account found..."))
      }
    }).catch( (status) => {
      dispatch(loginError(status))
    })
  }
