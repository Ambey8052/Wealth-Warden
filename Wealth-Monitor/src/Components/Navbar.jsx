// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900/80 shadow-md fixed top-0 w-full z-50 backbrop-blur-md text-bold">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:scale-125">
          WealthMonitor
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-125">Dashboard</Link>
          <Link to="/transactions" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-125">Transactions</Link>
          <Link to="/aboutme" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-125">About Me</Link>
          <Link to="/report" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-125">Reports</Link>

          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 hover:scale-125">
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>

          {/* Profile Dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="text-gray-700 dark:text-gray-300 hover:text-blue-500 hover:scale-125">
              <UserCircleIcon className="h-6 w-6" />
            </Menu.Button>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
                <Menu.Item>
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Profile</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Login</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/register" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Register</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/" className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700">Logout</Link>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-gray-700 dark:text-gray-300" onClick={toggleMobileMenu}>
          {isMobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2">
          <Link to="/Dashboard" className="block text-gray-700 dark:text-gray-300">Dashboard</Link>
          <Link to="/transactions" className="block text-gray-700 dark:text-gray-300">Transactions</Link>
          <Link to="/add" className="block text-gray-700 dark:text-gray-300">Add Expense</Link>
          <Link to="/report" className="block text-gray-700 dark:text-gray-300">Reports</Link>
          <Link to="/profile" className="block text-gray-700 dark:text-gray-300">Profile</Link>
          <Link to="/login" className="block text-gray-700 dark:text-gray-300">Login</Link>
          <Link to="/register" className="block text-gray-700 dark:text-gray-300">Register</Link>
          <button className="block text-red-500">Logout</button>
          <button onClick={toggleDarkMode} className="text-gray-700 dark:text-gray-300">
            Toggle {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
