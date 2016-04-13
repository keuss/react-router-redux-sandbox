/**
 * Created by krelix on 12/04/2016.
 */

import React from 'react'
import {connect} from 'react-redux'

import {login, setUsername, setPassword} from './actions'

class Login extends React.Component {
  constructor(props){
    super(props)
    this.handleFormAction = this.handleFormAction.bind(this);
  }
  handleFormAction(e) {
    e.preventDefault();
    this.props.handleLogin(this.props.username, this.props.password);
  }
  render() {
    return (
      <form id="loginBox" onSubmit={this.handleFormAction}>
          <h4>Please log in</h4>
          <input value={this.props.username} name="login" type="text" placeholder="Username" onChange={(e) => this.props.onUsernameChange(e.target.value)}/>
          <input value={this.props.password} name="password" type="password" placeholder="************" onChange={(e) => this.props.onPasswordChange(e.target.value)}/>
          <p style={{color: 'red', display: this.props.error ? 'block' : 'none'}}>{this.props.error}</p>
          <button disabled={this.props.loading === true} type="button"  onClick={this.handleFormAction}>Login</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    username: state.login.username,
    password: state.login.password,
    loading: state.login.loading,
    error: state.login.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (username, password)=> {
      console.log("handling login...")
      dispatch(login(username, password));
    },
    onUsernameChange: (username) => {
      dispatch(setUsername(username));
    },
    onPasswordChange: (password) => {
      dispatch(setPassword(password));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);