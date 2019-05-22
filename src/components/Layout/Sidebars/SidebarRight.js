import React from 'react';
import styled from 'styled-components';

const SidebarRight = styled.div`
    @media (max-width: 768px) {
        display:none;
    }
    @media (min-width: 1240px) {
        position: absolute;
        right: 0px;
        height: 100vh;
        width: 296px;
        background-color: lightgray;
    }
`

const SidebarRightContainer = () => {
  return (
    <SidebarRight/>
  );
}

export default SidebarRightContainer;
