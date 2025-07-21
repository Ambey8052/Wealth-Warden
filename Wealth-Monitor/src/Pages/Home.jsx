import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AboutWealthWarden from './AboutWealthWarden';

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="relative h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center blur-xs"
          style={{ backgroundImage: "url('https://images8.alphacoders.com/407/407198.jpg')" }}
        ></div>

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-opacity-50">
          <h1 className="text-4xl font-bold text-black mb-6">Welcome to Wealth Monitor</h1>
          <p className="text-lg text-black mb-4">Your personal finance management tool</p>
          <Link to="/login" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300">
            Get Started
          </Link>
        </div>
      </div>
     <AboutWealthWarden />
      <Footer />
    </>
  );
};

export default Home;
