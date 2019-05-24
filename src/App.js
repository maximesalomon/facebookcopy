import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';

import Layout from './components/Layout/Layout';
import Feed from './components/Layout/Feed/Feed';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';

import './shared/reset.css';

const App = (props) => {
  const { auth } = props;
  if(auth === true) {
    return (
      <Router>
        <Route path="/" exact component={SignIn}/>
        <Route path="/" exact component={SignUp}/>
      </Router>
    )
  }
  return (
    <>
    <Router>
      <ThemeProvider theme={{ mode: 'light' }}>
        <div className="App">
          <Route path="/" component={Layout}/>
          <Route path="/" exact component={Feed}/>
        </div>
      </ThemeProvider>
    </Router>
    </>
  );
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    auth: state.firebase.auth.isEmpty
  }
}

export default connect(mapStateToProps)(App);