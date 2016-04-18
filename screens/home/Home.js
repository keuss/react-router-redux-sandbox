import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'

import {fetchAccounts} from './actions'

import {AccountDetails, AccountList, BalanceGraph} from './components'

class Home extends React.Component {

  componentDidMount() {
    console.log('Home componentDidMount')
    this.props.fetchAccounts()
  }

  render() {
    console.log('render Home', this.props)
    if(!_.isEmpty(this.props.accounts)) {
      return (
        <AccountList accounts={this.props.accounts} selectedId={this.props.selectedAccount.id}>
          <AccountDetails expenses={this.props.selectedAccount.expenses}/>
          <BalanceGraph {...this.props} />
        </AccountList>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => ({
  accounts: state.home.accounts,
  selectedAccount: state.home.selectedAccount || state.home.accounts[0]
})

const mapDispatchToProps = (dispatch) => ({
  fetchAccounts: () => dispatch(fetchAccounts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
