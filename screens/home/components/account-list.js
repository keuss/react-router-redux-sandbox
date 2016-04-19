/**
 * Created by Adrien on 17/04/2016.
 */

import React from 'react'

export default class AccountList extends React.Component {
  render() {
    return (
      <div id="accountHolder">
        <div id="accList">
          {this.props.accounts.map((account, i) => (
            <h5 key={i} onClick={() => this.props.onClick(account.id)}
                className={this.props.selectedId === account.id ? 'pointer selected' : 'pointer'}>
              {account.name}
              <span className={account.balance >= 0 ? 'green' : 'red'}>{account.balance}€</span>
            </h5>)
          )}
        </div>
        <div id="accData">
          {this.props.children}
        </div>
      </div>
    )
  }
}
