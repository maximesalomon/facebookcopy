import React from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar/Navbar';
import SidebarLeftContainer from './Sidebars/SidebarLeft';
import SidebarRightContainer from './Sidebars/SidebarRight';

const Layout = () => {
  return (
    <>
        <Navbar/>
        <SidebarLeftContainer/>
        <SidebarRightContainer/>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {

  }
}

export default connect(mapStateToProps)(Layout);
