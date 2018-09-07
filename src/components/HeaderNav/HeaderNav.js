import React from "react";
import './HeaderNav.css';
import {Link} from 'react-router-dom';

const HeaderNav = () => 
<div className="container-fluid sticky headerContainer">
    <nav className="navbar">
        <div className="navbar-header">
            <div className="navbarCenter">
                <Link to="/" className="navbar-brand">Minnesota Valley Transport</Link>
                {/* <Link to="/Community" className="navbar-brand">Community</Link> */}
                <Link to="/About" className="navbar-brand">About</Link>
                <Link to="/Gallery" className="navbar-brand">Gallery</Link>
                <Link to="/DriversApplication" className="navbar-brand">Become a Driver</Link>
                <a className="navbarRight socialItems fb-ic ml-0" rel="noopener noreferrer" href="https://www.facebook.com/mnvalleytransport/" target="_blank" style={{color: '#ffffff'}}><i className="fa fa-facebook white-text mr-lg-4"></i></a>
            </div>
            {/* <div className="navbarRight">
            </div> */}
        </div>
    </nav>
</div>

export default HeaderNav;