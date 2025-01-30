import React from 'react';
import './App.css'; // Import the CSS file
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import logo from './assets/logo.svg'; 

const App = () => {
  return (
    <div className="app">
      {/* Header Component */}
      <Header logoSrc={logo} /> {/* Pass the logo as a prop */}

      {/* Navbar Component */}
      <Navbar />

      {/* Main Content Section */}
      <main className="main-content">
        <h1>Welcome to Nordic Step</h1>
        <p>Discover the best shoes for every occasion!</p>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default App;
