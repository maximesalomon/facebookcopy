import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

const SignUpForm = styled.form`
    padding-top: 100px;
    margin-left: 100px;
`

class SignUp extends Component {
  state = {
    firstname: '',
    lastname: '',
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
    this.props.signUp(this.state)
  }
  render() {
      console.log(this.state)
    return (
        <SignUpForm>
            <input id="firstname" onChange={this.handleChange}/>
            <input id="lastname" onChange={this.handleChange}/>
            <input id="email" onChange={this.handleChange}/>
            <input id="password" onChange={this.handleChange}/>
            <button onClick={this.handleSubmit}>Signup</button>
        </SignUpForm>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    authError: state.auth.authError,
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)