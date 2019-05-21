import React from 'react';
import styled from 'styled-components';

const FBLogo = styled.div`
  @media (max-width: 768px) {
      height: 50px;
      width: 128px;
      margin: 8px 16px;
      background-image: url("./img/facebook-logo.png");
      background-repeat: no-repeat;
      border: none;
    }
  @media (min-width: 768px) {
    height: 50px;
    width: 50px;
    margin: 8px 16px;
    background-image: url("./img/facebook-logo-f.png");
    background-repeat: no-repeat;
    border: none;
  }
`

const NavbarLogo = () => {
  return (
    <FBLogo></FBLogo>
  );
}

export default NavbarLogo;
