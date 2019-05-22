import React from 'react';
import styled from 'styled-components';

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
    <SettingsIcon src='./img/desktop-settings-icon.png'/>
  );
}

export default NavbarSettings;
