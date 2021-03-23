import React from 'react';
import '../css/App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className="nav-Links">
        <li><h3>Logo</h3></li>
        <Link to="/homepage"><li><button>Home</button></li></Link>
        <Link to="/about-us"><li><button>About Us</button></li></Link>
        <Link to="/portfolio"><li><button>Portfolio</button></li></Link>
        <Link to="/contact-us"><li><button>Contact Us</button></li></Link>
        <Link to="/download"><li><button>Download</button></li></Link>
      </ul>
    </nav>
  )
}

export default Nav;