import React from 'react';
import { Link } from 'react-router-dom';
import GamePage from './GamePage';
import Header from './Header';

import './GamePage.css'; 
const UserAccountPage = () => {
  const userData = {
    name: 'John Doe',
    balance: 0, // User's current balance
  };

  return (
    <div className='frame'>
    <Header />
    <div className='Account1'>
      <h1>User Account Page</h1>
      <p>Welcome, {userData.name}!</p>
      <p>Balance: ${userData.balance}</p>
      <GamePage />
      <div className='logout2'>
      <Link to="/Login">Logout</Link>
      </div>
    </div>
    </div>
  );
};

export default UserAccountPage;
