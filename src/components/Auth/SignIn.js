import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

const SignInForm = styled.form`
    padding-top: 400px;
    margin-left: 400px;
`

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {
    return (
        <SignInForm>
            <input id="email" onChange={this.handleChange}/>
            <input id="password" onChange={this.handleChange}/>
            <button onClick={this.handleSubmit}>Login</button>
        </SignInForm>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    authError: state.auth.authError,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)