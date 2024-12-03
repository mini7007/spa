import React from 'react';
import { Link } from 'react-scroll'; 
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="Home" smooth={true} duration={500}>
          Mini
        </Link>
      </div>
      <ul>
        <li>
          <Link to="Home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="AboutUs" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="Services" smooth={true} duration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link to="ContactUs" smooth={true} duration={500}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
