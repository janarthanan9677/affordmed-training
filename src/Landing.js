import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'; // Make sure to create and import your CSS file

const Landing = () => {
  return (
    <div className="Landing">
      <h1>WELCOME TO LANDING</h1>
      <div className="buttons">
        <Link to="/Login" className="button">Login</Link>
        <Link to="/Signup" className="button">Signup</Link>
      </div>
    </div>
  );
};

export default Landing;
