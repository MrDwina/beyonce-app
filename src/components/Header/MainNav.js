import React from 'react';
import Albums from '../../containers/Albums/Albums';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import ContactFormControler from '../../containers/ContactFormControler/ContactFormControler';
import "./Header.css";


const MainNav = () => (
    <Router>
        <div >
            <nav className="navbar navbar-inverse">
                    <div className="container">
                        <div className="navbar-header">
                        <a className="navbar-brand" href="/">Beyoncé Albums</a>
                        </div>
                        <span className="drop-menu glyphicon glyphicon-menu-hamburger hidden-lg hidden-md hidden-sm"></span>
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link exact="true" to="/" >Home</Link >
                                </li>
                                <li>
                                    <Link to="/About">About</Link >
                                </li>
                                <li>
                                    <Link to="/Albums">Albums</Link >
                                </li>
                                <li>
                            <Link to="/ContactFormControler">Contact</Link >
                                </li>
                            </ul>
                    </div>
            </nav>
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Albums" component={Albums} />
            <Route path="/ContactFormControler" component={ContactFormControler} />
        </div>
    </Router>
);

export default MainNav;