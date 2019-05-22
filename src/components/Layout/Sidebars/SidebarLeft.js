import React from 'react';
import styled from 'styled-components';

const SidebarLeft = styled.div`
    @media (max-width: 768px) {
        display:none;
    }
    @media (min-width: 768px) {
        height: 100vh;
        width: 296px;
        background-color: lightgray;
    }
`

const SidebarLeftContainer = () => {
  return (
    <SidebarLeft/>
  );
}

export default SidebarLeftContainer;
