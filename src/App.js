import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./components/Layout/Layout";
import Feed from "./components/Layout/Feed/Feed";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";

import "./shared/reset.css";

const App = ({ auth }) => {
  if (auth === true) {
    return (
      <Router>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/" component={SignUp} />
      </Router>
    );
  }
  return (
    <>
      <Router>
        <Switch>
          <ThemeProvider theme={{ mode: "light" }}>
            <div className="App">
              <Route exact path="/" component={Layout} />
              <Route exact path="/" component={Feed} />
            </div>
          </ThemeProvider>
        </Switch>
      </Router>
    </>
  );
};

const mapStateToProps = state => {
  // console.log(state)
  return {
    auth: state.firebase.auth.isEmpty
  };
};

export default connect(mapStateToProps)(App);
