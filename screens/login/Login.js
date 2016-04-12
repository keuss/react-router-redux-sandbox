/**
 * Created by krelix on 12/04/2016.
 */

import React from 'react'

export default class Login extends React.Component {
  render() {
    return (
      <div id="loginBox">
          <h4>Please log in</h4>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="************" />
          <button>Login</button>
      </div>
    )
  }
}