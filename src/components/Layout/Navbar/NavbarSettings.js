import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/authActions'

const SettingsIcon = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 768px) {
    height: 48px;
    width: 48px;
    position: absolute;
    right: 16px;
    top: 8px;
  }
`

const NavbarSettings = (props) => {
  return (
    <SettingsIcon onClick={props.signOut} src='./img/desktop-settings-icon.png'/>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(NavbarSettings);
