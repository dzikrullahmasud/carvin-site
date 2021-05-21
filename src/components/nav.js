import React from 'react';
import '../css/App.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Nav() {
  return (
    <nav>
      <ul className="nav-Links">
        <Link to="/homepage"><li><img className="nav-Logo" src={logo} alt="Logo" /></li></Link>
        <Link to="/homepage"><li>
          <div class="nav-Button" id="nav-Button">
            <div id="circle"></div>
              <p>Home</p>
          </div>
        </li></Link>
        <Link to="/about-us"><li>
          <div class="nav-Button" id="nav-Button">
            <div id="circle"></div>
            <p>About Us</p>
          </div>
        </li></Link>
        <Link to="/portfolio"><li>
          <div class="nav-Button" id="nav-Button">
            <div id="circle"></div>
            <p>Portfolio</p>
          </div>
        </li></Link>
        <Link to="/contact-us"><li>
          <div class="nav-Button" id="nav-Button">
            <div id="circle"></div>
            <p>Contact Us</p>
          </div>
        </li></Link>
        <Link to="/download"><li>
          <div class="nav-Button" id="nav-Button">
            <div id="circle"></div>
              <p>Download</p>
          </div>
        </li></Link>
      </ul>
    </nav>
  )
}

export default Nav;