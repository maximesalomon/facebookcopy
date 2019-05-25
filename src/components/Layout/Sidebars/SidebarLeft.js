import React from "react";
import styled from "styled-components";

import { sidebarBgColor } from "../../../shared/theme";
import NotificationsList from "../../Notifications/NotificationsList";

const SidebarLeftContainer = () => {
  return (
    <SidebarLeft>
      <NotificationsList />
    </SidebarLeft>
  );
};

const SidebarLeft = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 768px) {
    position: fixed;
    margin-top: 64px;
    left: 0px;
    height: 100%;
    width: 296px;
    background-color: ${sidebarBgColor};
  }
`;

export default SidebarLeftContainer;
