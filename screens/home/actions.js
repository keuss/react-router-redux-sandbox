import ActionTypes from '../../shared/ActionType'
import api from '../../shared/api'

const types = ActionTypes.create(
  'ADD_LINE',
  'DEL_LINE',
  'UPDATE_LINE',
  'GET_ACCOUNTS_REQUEST',
  'GET_ACCOUNTS_SUCCESS',
  'GET_ACCOUNTS_FAILURE'
)

export default types

export const addLine = (line) => ({
  type : types.ADD_LINE,
  line
})

export const removeLine = (id) => ({
  type : types.DEL_LINE,
  id
})

export const updateLine = (id, line) => ({
  type: types.UPDATE_LINE
})

export const fetchAccounts = () =>
  (dispatch, getState) => {
    dispatch({
      type: types.GET_ACCOUNTS_REQUEST
    })
    api.getJSON('accounts')
    .then(json => {
      dispatch({
        type: types.GET_ACCOUNTS_SUCCESS,
        data: json
      })
    })
    .catch(error => {
      dispatch({
        type: types.GET_ACCOUNTS_FAILURE,
        error
      })
    })
  }
