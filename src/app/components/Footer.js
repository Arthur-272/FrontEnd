import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        
          

          <div className="navbar-menu-wrapper d-flex align-items-stretch">
          
          <ul>
          <li className="nav-item nav-logout d-none d-lg-block"><span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © <a href="https://www.charusat.ac.in/cspit/it/" target="_blank" rel="noopener noreferrer">Charotar University </a>2020</span></li>
          <li className="nav-item nav-logout d-none d-lg-block">
          <Link className="navbar-brand " to="/">Home</Link>
          <Link className="navbar-brand " to="/">Scoring System</Link>
          <Link className="navbar-brand " to="/">About us</Link>
          <Link className="navbar-brand " to="/">Contact us</Link>
          
          </li>
          </ul>

          </div>
        
      </footer> 
    );
  }
}

export default Footer;