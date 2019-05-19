import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => {
  return <h1>React + React Router + Redux Starter Kit</h1>;
}

const About = () => {
  return <h1>About</h1>;
}

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
      </div>
    </Router>
  );
}

export default App;
