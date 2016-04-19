import ActionType from '../shared/ActionType'

import api from '../shared/api'

const types = ActionType.create(
  'GET_SESSION_REQUEST',
  'GET_SESSION_SUCCESS',
  'GET_SESSION_FAILURE'
)

export default types

export const getSession = () =>
  (dispatch, getState) => {
    dispatch({
      type: types.GET_SESSION_REQUEST
    })
    api.getJSON('profile')
    .then(json => {
      dispatch({
        type: types.GET_SESSION_SUCCESS,
        profile: json
      })
    })
    .catch(error => {
      dispatch({
        type: types.GET_SESSION_FAILURE,
        error
      })
    })
  }
