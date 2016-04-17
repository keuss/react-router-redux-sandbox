import ActionType from '../../shared/ActionType'
import { browserHistory } from 'react-router'

import api from '../../shared/api'

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

export const loginSuccess = () =>
  ({
    type: types.LOGIN_SUCCESS
  })

export const login = (username, password) =>
  (dispatch, getState) => {
    dispatch(loginRequest());
    console.log('login with : ' + username + ', and ' + password);

    (new Promise(function(resolve, reject) {
      // Refactor to use api.getJSON
      // Check login with http://localhost:3000/users?name=admin&pwd=admin (result > 0 && result <= 1)
      const uri = "http://httpbin.org/delay/2";
      const method = "GET";
      let xhr = new XMLHttpRequest();
      xhr.onload = function() {
        if(this.status >= 200 && this.status < 300) {
          resolve(this.response)
        } else {
          reject(this.statusText)
        }
      }
      xhr.onerror = function() {
        reject(this.statusText)
      }

      console.log(`Opening XHR : ${method} for ${uri}`)
      xhr.open(method, uri)
      console.log(`Sending XHR`)
      xhr.send()
    })).then( (response) => {
      console.log(response)
      dispatch(loginSuccess())
      browserHistory.push('/home')
    }).catch( (status) => {
      console.error("Unable to verify credentiels : " + status)
      dispatch(loginError(status))
    })
  }
