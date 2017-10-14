import React, { Component } from 'react';
import './App.css';
import Albums from "../Albums/Albums";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
// import { NavLink } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div >
          <div class="nav">
            <div class="container">
              <ul>
                <li>
                  <NavLink activeClassName="active" to="/" exact>Home</NavLink >
                </li>
                <li>
                  <NavLink to="/About" exact>About</NavLink >
                </li>
                <li>
                  <NavLink to="/Albums" exact>Albums</NavLink >
                </li>
              </ul>
            </div>
          </div>
        <Route path="/" exact component={Home} />
        <Route path="/About"  component={About} />
        <Route path="/Albums"  component={Albums} />  
        </div>  
      </Router>
    );
  }
}

export default App;
