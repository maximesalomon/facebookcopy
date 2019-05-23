import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';

import Layout from './components/Layout/Layout';
import Feed from './components/Layout/Feed/Feed';
import SignIn from './components/Auth/SignIn';

import './shared/reset.css';

const App = (props) => {
  return (
    <>
    <Router>
      <ThemeProvider theme={{ mode: 'light' }}>
        <div className="App">
          <Route path="/" component={Layout}/>
          <Route path="/" exact component={Feed}/>
          <Route path="/signin" component={SignIn}/>
        </div>
      </ThemeProvider>
    </Router>
    </>
  );
}

export default App;