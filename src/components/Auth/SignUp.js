import React, { useState } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import styled from "styled-components";

const SignUp = props => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });

  const handleFirstName = e => {
    setUser({ ...user, firstname: e.target.value });
  };

  const handleLastName = e => {
    setUser({ ...user, lastname: e.target.value });
  };

  const handleEmail = e => {
    setUser({ ...user, email: e.target.value });
  };

  const handlePassword = e => {
    setUser({ ...user, password: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.signUp(user);
  };
  
  return (
    <SignUpForm>
      <input id="firstname" type="text" onChange={handleFirstName} />
      <input id="lastname" type="text" onChange={handleLastName} />
      <input id="email" type="email" onChange={handleEmail} />
      <input id="password" type="password" onChange={handlePassword} />
      <button onClick={handleSubmit}>Signup</button>
    </SignUpForm>
  );
};

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

const SignUpForm = styled.div`
  display: flex;
  flex-direction: column;
`