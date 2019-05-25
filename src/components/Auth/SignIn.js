import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";

const SignInForm = styled.form`
  padding-top: 100px;
  margin-left: 100px;
`;

const SignIn = props => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const handleEmail = e => {
    setUser({ ...user, email: e.target.value });
  };

  const handlePassword = e => {
    setUser({ ...user, password: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.signIn(user);
  };
  return (
    <SignInForm>
      <input id="email" onChange={handleEmail} />
      <input id="password" onChange={handlePassword} />
      <button onClick={handleSubmit}>Login</button>
    </SignInForm>
  );
};

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
