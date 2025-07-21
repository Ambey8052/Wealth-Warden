import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="z-50 flex justify-between bg-gray-900/80 text-white p-4 mt-8  bottom-0 w-full backdrop-blur-xs">
      <div className='flex flex-col space-y-2'>
        <h1 className='text-xl'>Wealth-Warden by KARAN KUMAR</h1>
        <p>© 2025 Wealth Monitor. All rights reserved.</p>
        <p>AKGEC, Ghaziabad, U.P</p>
        <p>India</p>
      </div>

      <div className='flex flex-col space-y-2'>
        <p className='text-xl'>Follow us on social media for updates and support.</p>
        <div className="flex items-center gap-x-6 pt-4 text-2xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:text-blue-500 cursor-pointer transition duration-300 hover:scale-125" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="hover:text-red-600 cursor-pointer transition duration-300 hover:scale-125" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition duration-300 hover:scale-125" />
          </a>
        </div>
        <p className='text-xl pt-3'>+56-484516856, +91-568651565</p>
      </div>
    </footer>
  );
};

export default Footer;
