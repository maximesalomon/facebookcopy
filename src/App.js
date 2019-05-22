import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/Layout/Navbar/Navbar';
import SidebarLeftContainer from './components/Layout/Sidebars/SidebarLeft';
import SidebarRightContainer from './components/Layout/Sidebars/SidebarRight';
import FeedContainer from './components/Layout/Feed/FeedContainer';


import './shared/reset.css';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={{ mode: 'light' }}>
        <div className="App">
          <Route path="/" exact >
              <FeedContainer/>
              <Navbar/>
              <SidebarRightContainer/>
              <SidebarLeftContainer/>
          </Route>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
