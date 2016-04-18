/**
 * Created by Adrien on 17/04/2016.
 */

import React from 'react'

import Expense from './expense-line'

export default class AccountDetails extends React.Component {
  render() {
    return (
      <div id="accDetails">
        {this.props.expenses.map( (expense, i) => (<Expense key={i} data={expense} />))}
      </div>
    )
  }
}
