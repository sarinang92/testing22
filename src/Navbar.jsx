import React from 'react';
import './Navbar.css'; // Import the CSS file
import UserMenu from './UserMenu.jsx'; // Import the UserMenu component

const Navbar = () => {
  const navLinks = ['Men', 'Women', 'Kids', 'Sale'];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {/* Navigation Links */}
        {navLinks.map((link, index) => (
          <li key={`${link}-${index}`} className="nav-item"> {/* Corrected template literal */}
            <a href={`#${link.toLowerCase()}`} className="nav-link"> {/* Corrected template literal */}
              {link}
            </a>
          </li>
        ))}
        {/* User Menu */}
        <li className="nav-item">
          <UserMenu />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
