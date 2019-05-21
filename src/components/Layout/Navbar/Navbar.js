import React from 'react';
import styled from 'styled-components';

import NavbarLogo from './NavbarLogo';
import NavbarSearch from './NavbarSearch';
import NavbarIcons from './NavbarIcons';
import NavbarSettings from './NavbarSettings';
import { navbarBackgroundColor, dropShadow, textColor } from '../../../shared/theme';

const NavbarContainer = styled.div`
  @media (max-width: 768px) {
    height: 104px;
    width: 100%;
    background-color: ${navbarBackgroundColor};
    box-shadow: ${dropShadow};
    display: flex;
  }
  @media (min-width: 768px) {
    height: 64px;
    width: 100%;
    background-color: ${navbarBackgroundColor};
    box-shadow: ${dropShadow};
    display: flex;
    color: ${textColor};
  }
`

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLogo/>
      <NavbarSearch/>
      <NavbarIcons/>
	    <NavbarSettings/>
    </NavbarContainer>
  );
}

export default Navbar;
