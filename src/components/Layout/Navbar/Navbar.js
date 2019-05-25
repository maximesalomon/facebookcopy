import React from 'react';
import styled from 'styled-components';

import NavbarLogo from './NavbarLogo';
import NavbarSearch from './NavbarSearch';
import NavbarIcons from './NavbarIcons';
import NavbarSettings from './NavbarSettings';
import { navbarBackgroundColor, dropShadow, textColor } from '../../../shared/theme';

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

const NavbarContainer = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    height: 104px;
    width: 100%;
    background-color: ${navbarBackgroundColor};
    box-shadow: ${dropShadow};
    display: flex;
  }
  @media (min-width: 768px) {
    position: fixed;
    z-index: 1;
    height: 64px;
    width: 100%;
    background-color: ${navbarBackgroundColor};
    box-shadow: ${dropShadow};
    display: flex;
    color: ${textColor};
  }
`

export default Navbar;
