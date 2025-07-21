import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-10">Wealth-Warden</h2>
        <nav className="flex flex-col gap-4">
          <Link to="/" className="hover:bg-blue-700 p-2 rounded">Home</Link>
          <Link to="/Transactions" className="hover:bg-blue-700 p-2 rounded">Transactions</Link>
          <Link to="/report" className="hover:bg-blue-700 p-2 rounded">Reports</Link>
          <Link to="/profile" className="hover:bg-blue-700 p-2 rounded">Profile</Link>
          <Link to="/" className="hover:bg-red-700 mt-10 p-2 rounded text-red-300">Logout</Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Welcome back, Karan 👋</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Total Income</h3>
            <p className="text-2xl font-bold text-green-600">₹75,000</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Total Expenses</h3>
            <p className="text-2xl font-bold text-red-500">₹45,000</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Net Savings</h3>
            <p className="text-2xl font-bold text-blue-500">₹30,000</p>
          </div>
        </div>

        {/* Placeholder for upcoming sections */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
