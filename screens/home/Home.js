import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'

import {fetchAccounts, setSelectedAccount} from './actions'

import {AccountDetails, AccountList, BalanceGraph} from './components'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.handleAccountClick = this.handleAccountClick.bind(this)
  }

  componentDidMount() {
    console.log('Home componentDidMount')
    this.props.fetchAccounts()
  }

  handleAccountClick(newId) {
    console.log(`in handleAccountClick with newId = ${newId}`)
    this.props.changeAccount(newId)
  }

  render() {
    console.log('render Home', this.props)
    if(!_.isEmpty(this.props.accounts)) {
      return (
        <AccountList accounts={this.props.accounts} selectedId={this.props.selectedAccount.id} onClick={this.handleAccountClick}>
          <AccountDetails expenses={this.props.selectedAccount.expenses} />
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
  fetchAccounts: () => dispatch(fetchAccounts()),
  changeAccount: (id) => dispatch(setSelectedAccount(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
