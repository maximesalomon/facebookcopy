import React from 'react';
import styled from 'styled-components';

const NavbarIcons = () => {
  return (
    <IconsContainer>
      <NavbarHomeIcon src='./img/desktop-home-icon.png'/>
      <NavbarWatchIcon src='./img/desktop-watch-icon.png'/>
      <NavbarFriendsIcon src='./img/desktop-friends-icon.png'/>
      <NavbarProfilePicture src='./img/tom-brady-profile-picture.png'/>
      <NavbarMarketplaceIcon src='./img/desktop-marketplace-icon.png'/>
      <NavbarNotificationsIcon src='./img/desktop-notifications-icon.png'/>
      <NavbarMessengerIcon src='./img/desktop-messenger-icon.png'/>
      <MobileBurgerMenu src='./img/mobile-burger-menu.png'/>
    </IconsContainer>
  );
}

const IconsContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    top: 60px;
    left: 4vw;
    width: 92vw;
  }
  @media (min-width: 768px) {
    max-width: 640px;
    width: 50vw;
    left: calc(36vw);
    top: 8px;
  }
  @media (min-width: 1200px) {
    width: 640px;
    left: calc(50vw - 320px);
    top: 8px;
  }
`

const NavbarProfilePicture = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 768px) {
    height: 48px;
    width: 48px;
  }
`

const NavbarHomeIcon = styled.img`
  @media (max-width: 768px) {
  }
  @media (min-width: 768px) {
    margin-top: 8px;
    height: 32px;
    width: 32px;
  }
`

const NavbarNotificationsIcon = styled.img`
  @media (max-width: 768px) {
  }
  @media (min-width: 768px) {
    margin-top: 9px;
    height: 32px;
    width: 32px;
  }
`

const NavbarWatchIcon = styled.img`
  @media (max-width: 768px) {
  }
  @media (min-width: 768px) {
    margin-top: 10px;
    height: 32px;
    width: 32px;
  }
`

const NavbarMarketplaceIcon = styled.img`
  @media (max-width: 768px) {
    display:none;
  }
  @media (min-width: 768px) {
    margin-top: 10px;
    height: 32px;
    width: 32px;
  }
`

const NavbarFriendsIcon = styled.img`
  @media (max-width: 768px) {
  }
  @media (min-width: 768px) {
    margin-top: 10px;
    height: 32px;
    width: 32px;
  }
`

const NavbarMessengerIcon = styled.img`
  @media (max-width: 768px) {
    display:none;
  }
  @media (min-width: 768px) {
    margin-top: 10px;
    height: 32px;
    width: 32px;
  }
`

const MobileBurgerMenu = styled.img`
  @media (max-width: 768px) {
    margin-top: 10px;
    height: 24px;
    width: 24px;
  }
  @media (min-width: 768px) {
    display:none;
  }
`

export default NavbarIcons;
