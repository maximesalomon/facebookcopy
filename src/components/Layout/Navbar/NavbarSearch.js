import React from 'react';
import styled from 'styled-components';

import { searchBarColor } from '../../../shared/theme';

const SearchBar = styled.div`
  @media (max-width: 768px) {
    position: absolute;
    top: 12px;
    right: 12px;
  }
  @media (min-width: 768px) {
  }
`

const SearchBarIcon = styled.img`
  @media (max-width: 768px) {
    height: 32x;
    width: 32px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

const MessengerIcon = styled.img`
  @media (max-width: 768px) {
    padding-left: 8px;
    height: 32x;
    width: 32px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

const SearchBarInput = styled.input`
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 768px) {
    margin-top: 12px;
    height: 40px;
    min-width: 200px;
    width: 16vw;
    border-radius: 20px;
    border: none;
    background-color: ${searchBarColor};
  }
  @media (min-width: 1556px) {
    width: 368px;
  }
`


const NavbarSearch = () => {
  return (
    <SearchBar>
      <SearchBarInput />
      <SearchBarIcon src='./img/mobile-search-loop-icon.png'/>
      <MessengerIcon src='./img/mobile-messenger-icon.png'/>
    </SearchBar>
  );
}

export default NavbarSearch;
