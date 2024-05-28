import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Header from "./Header";
// import UserAccountPage from './UserAccountPage';
import './Header.css';

const Home = () => {
    return (
        <div className='homeclass'>
            <Header />
            <div className='main'>
                <div className='maintext'>
                <h2>Welcome to the Home Page</h2>
                <p>This is the main content of the home page.</p>
                </div>
            </div>
            <div className='linkbutton'>
                <Link to="/UserAccountPage">UserAccount</Link>
                </div>
        </div>
    );
};

export default Home;
