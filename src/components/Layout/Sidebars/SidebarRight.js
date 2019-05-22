import React from 'react';
import styled from 'styled-components';

import { sidebarBgColor } from '../../../shared/theme';

const SidebarRight = styled.div`
    @media (max-width: 768px) {
        display:none;
    }
    @media (min-width: 1240px) {
        position: absolute;
        right: 0px;
        height: calc(100% - 64px);
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
