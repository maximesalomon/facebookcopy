import React from "react";

import Navbar from "./Navbar/Navbar";
import SidebarLeftContainer from "./Sidebars/SidebarLeft";
import SidebarRightContainer from "./Sidebars/SidebarRight";

const Layout = () => {
  return (
    <>
      <Navbar />
      <SidebarLeftContainer />
      <SidebarRightContainer />
    </>
  );
};

export default Layout;