import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <h2>Chemical Industry</h2>
      <div className="navbar">
      <Link to="/">Home</Link>
        <Link to="/info">Info</Link>
        <Link to="/contact">Contact</Link>
        <div className='logout'>
        <Link to="/landing">Logout</Link>
          </div>
      </div>
    </div>
  );
};

export default Header;