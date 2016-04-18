import ActionTypes from '../../shared/ActionType';

const types = ActionTypes.create(
  'ADD_LINE',
  'DEL_LINE',
  'UPDATE_LINE'
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