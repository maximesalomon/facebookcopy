import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";

const SignUpForm = styled.form`
  padding-top: 100px;
  margin-left: 100px;
`;

const SignUp = props => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });

  console.log(user);

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
      <input id="firstname" onChange={handleFirstName} />
      <input id="lastname" onChange={handleLastName} />
      <input id="email" onChange={handleEmail} />
      <input id="password" onChange={handlePassword} />
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