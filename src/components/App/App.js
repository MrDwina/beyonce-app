import React, { Component } from 'react';
import './App.css';
import MainNav from "../Header/MainNav";
import Footer from "../Footer/Footer"
// import { NavLink } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <Footer />
      </div>
    );
  }
}

export default App;
