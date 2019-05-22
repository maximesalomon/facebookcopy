import React from 'react';
import styled from 'styled-components';

import { sidebarBgColor } from '../../../shared/theme';

const SidebarLeft = styled.div`
    @media (max-width: 768px) {
        display:none;
    }
    @media (min-width: 768px) {
        position: absolute;
        left: 0px;
        height: calc(100% - 64px);
        width: 296px;
        background-color: ${sidebarBgColor};
    }
`

const SidebarLeftContainer = () => {
  return (
    <SidebarLeft/>
  );
}

export default SidebarLeftContainer;
