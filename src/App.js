import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from "./Landing";
import Login from './Login';
import Signup from './Signup'; 
import Home from './Home';
// import Header from './Header';
import UserAccountPage from './UserAccountPage';
// import GamePage from './GamePage';
// import Footer from './footer'; 

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path='/landing' element={<Landing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />  
                    <Route path="/home" element={<Home />} />
                     <Route path="/Useraccountpage" element={<UserAccountPage />} />

                </Routes>
            </div>
        </Router>
    );
}

export default App;
