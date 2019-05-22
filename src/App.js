import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from './components/Layout/Layout';
import FeedContainer from './components/Layout/Feed/FeedContainer';
import Post from './components/Posts/Post';

import './shared/reset.css';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={{ mode: 'light' }}>
        <div className="App">
          <Route path="/" component={Layout}/>
          <Route path="/" exact component={FeedContainer}/>
          <Route path="/posts/:id" component={Post}/>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
