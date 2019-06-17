import React from "react";
import { ThemeProvider } from "styled-components";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./components/Layout/Layout";
import Feed from "./components/Layout/Feed/Feed";
import HomeAuth from "./components/Auth/HomeAuth";
import User from "./components/Users/User";

import "./shared/reset.css";

const App = ({ auth }) => {
  if (auth === true) {
    return <Route exact path="/" component={HomeAuth} />
  }
  return (
    <>
        <Switch>
          <ThemeProvider theme={{ mode: "light" }}>
            <div className="App">
              <Route exact path="/" component={Layout} />
              <Route exact path="/" component={Feed} />
              <Route exact path="/users/:id" component={User} />
            </div>
          </ThemeProvider>
        </Switch>
    </>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth.isEmpty
  };
};

export default connect(mapStateToProps)(App);
