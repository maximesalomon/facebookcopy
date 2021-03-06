import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { mobileFacebookLogo, desktopFacebookLogo } from '../../../shared/theme';

const NavbarLogo = () => {
  return (
    <Link to='/'><FBLogo></FBLogo></Link>
  );
}

const FBLogo = styled.div`
  @media (max-width: 768px) {
      height: 48px;
      width: 128px;
      margin: 8px 16px;
      background-image: url(${mobileFacebookLogo});
      background-repeat: no-repeat;
      border: none;
    }
  @media (min-width: 768px) {
    height: 50px;
    width: 50px;
    margin: 6px 16px;
    background-image: url(${desktopFacebookLogo});
    background-repeat: no-repeat;
    border: none;
  }
`

export default NavbarLogo;
