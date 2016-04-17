/**
 * Created by krelix on 14/04/2016.
 */
import types from './actions'

const defaultMap = {
  "accounts": [
    {
      "id": 1,
      "name": "Compte principal",
      "balance": 20,
      "expenses": [
        {
          "id": 1,
          "date": '10/04/2016',
          "issuer": 'Spotify',
          "description": 'Abonnement',
          "value": -9.99
        },
        {
          "id": 2,
          "date": '12/04/2016',
          "issuer": 'Amazon.fr',
          "description": 'Remboursement retour produit',
          "value": 250
        },
        {
          "id": 3,
          "date": '16/04/2016',
          "issuer": 'Steam',
          "description": 'Achat Dark Souls III',
          "value": -59.99
        },
      ]
    },
    {
      "id": 2,
      "name": "Plan épargne logement",
      "balance": 8000
    },
    {
      "id": 3,
      "name": "Prêt croissants",
      "balance": -200
    }
  ]
};

// TODO : Fix reducers...
export default (state = defaultMap, action) => {
  let line = action.line
  switch (action.type) {
    case types.ADD_LINE:
      return Object.assign({}, state, {line: [].concat(state.lines, line)})
    case types.DEL_LINE:
      return Object.assign({}, state, {line: state.lines.push(line)})
    case types.UPDATE_LINE:
      return Object.assign({}, state, {line: state.lines.push(line)})
    default:
      return state
  }
}