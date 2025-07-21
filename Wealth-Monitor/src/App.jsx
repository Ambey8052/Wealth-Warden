import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home'; 
import Dashboard from './Pages/Dashboard';
import Transactions from './Pages/Transactions';
import Report from './Pages/Report';
import AboutMe from './Pages/AboutMe';
import UserProfile from './Pages/UserProfile';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/report" element={<Report />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="profile" element={<UserProfile />} />
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
