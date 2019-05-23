import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

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

const NavbarSettings = () => {
  return (
    <NavLink to='/signin'><SettingsIcon src='./img/desktop-settings-icon.png'/></NavLink>
  );
}

export default NavbarSettings;
