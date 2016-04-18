/**
 * Created by Adrien on 17/04/2016.
 */

import React from 'react';

export default class ExpenseLine extends React.Component {
  render() {
    let data = this.props.data;
    return (
      <div className="expense">
        <span>{data.date} {data.issuer} : {data.description}</span>
        <span className={data.value >= 0 ? 'green' : 'red'}>{data.value}€</span>
      </div> )
  }
}