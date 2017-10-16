import React from "react";
import Albums from "../../containers/Albums/Albums";
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import "./Header.css";


const MainNav = () => (
    <Router>
        <div >
            <nav className="navbar navbar-inverse">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">Boncy Albums</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li>
                            <Link exact="true" to="/" >Home</Link >
                            </li>
                            <li>
                                <Link to="/About" >About</Link >
                            </li>
                            <li>
                                <Link to="/Albums"  >Albums</Link >
                            </li>
                        </ul>
                    </div>
            </nav>
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Albums" component={Albums} />
        </div>
    </Router>
);

export default MainNav;