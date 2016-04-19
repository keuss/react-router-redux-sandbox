import ActionTypes from '../../shared/ActionType'
import api from '../../shared/api'

const types = ActionTypes.create(
  'SET_SELECTED_ACCOUNT',
  'GET_ACCOUNTS_REQUEST',
  'GET_ACCOUNTS_SUCCESS',
  'GET_ACCOUNTS_FAILURE',
)

export default types

export const setSelectedAccount = (newId) =>
  (dispatch, getState) => {
    let state = getState();
    if(state && state.home && state.home.accounts){
      // dirty trick
      let acc = state.home.accounts.filter((item)=> item.id === newId)
      if(acc && acc[0])
        dispatch({
          type: types.SET_SELECTED_ACCOUNT,
          data: acc[0]
      })
    }
  }

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
