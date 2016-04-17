import React from 'react'
import {connect} from 'react-redux'

import {AccountDetails, AccountList, BalanceGraph} from './components'

class Home extends React.Component {
  render() {
    return (
      <AccountList accounts={this.props.accounts} selectedId={this.props.selectedAccount.id}>
        <AccountDetails expenses={this.props.selectedAccount.expenses}/>
        <BalanceGraph />
      </AccountList>
    )
  }
}

const mapStateToProps = (state) => ({
  accounts: state.home.accounts,
  selectedAccount: state.home.selectedAccount || state.home.accounts[0]
});

/*const mapDispatchToProps*/

export default connect(mapStateToProps)(Home)