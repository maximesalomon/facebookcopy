import React from 'react';
import styled from 'styled-components';

import { sidebarBgColor } from '../../../shared/theme';

const SidebarRight = styled.div`
    @media (max-width: 768px) {
        display:none;
    }
    @media (min-width: 1240px) {
        position: fixed;
        margin-top: 64px;
        right: 0px;
        height: 100%;
        width: 296px;
        background-color: ${sidebarBgColor};
    }
`

const SidebarRightContainer = () => {
  return (
    <SidebarRight/>
  );
}

export default SidebarRightContainer;
