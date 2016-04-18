/**
 * Created by Adrien on 17/04/2016.
 */

import React from 'react'

export default class BalanceGraph extends React.Component {
  render() {
    console.log('BalanceGraph', this.props)
    return (
      <div>
        <h5>Graph Dépenses</h5>
        <img src="http://i.imgur.com/KTEj96F.png" />
      </div>
    )
  }
}
