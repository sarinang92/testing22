import React from 'react';
import './Header.css'; // Import the CSS file

const Header = ({ logoSrc }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logoSrc} alt="Shoe Store Logo" className="logo" />
        <h1 className="tagline">Nordic Step</h1>
      </div>
    </header>
  );
};

export default Header;
