import React from "react";
import styled from "styled-components";

import { sidebarBgColor } from "../../../shared/theme";
import AddFriends from "../../Friends/AddFriends";

const SidebarRightContainer = () => {
  return (
    <SidebarRight>
      <AddFriends />
    </SidebarRight>
  )
};

const SidebarRight = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 1240px) {
    position: fixed;
    margin-top: 64px;
    right: 0px;
    height: 100%;
    width: 296px;
    background-color: ${sidebarBgColor};
  }
`;

export default SidebarRightContainer;
