import React from "react";
import './HeaderNav.css';
import {Link} from 'react-router-dom';

const HeaderNav = () => 
<div className="container-fluid sticky headerContainer">
    <nav className="navbar">
        <div className="navbar-header">
            <Link to="/" className="navbar-brand">Minnesota Valley Transport</Link>
            {/* <Link to="/Community" className="navbar-brand">Community</Link> */}
            <Link to="/About" className="navbar-brand">About</Link>
            <Link to="/Gallery" className="navbar-brand">Gallery</Link>
            <Link to="/DriversApplication" className="navbar-brand">Become a Driver</Link>
        </div>
    </nav>
</div>

export default HeaderNav;