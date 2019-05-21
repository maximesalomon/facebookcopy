import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/Layout/Navbar/Navbar';

import './shared/reset.css';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={{ mode: 'light' }}>
        <div className="App">
          <Route path="/" exact component={Navbar} />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
