import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Karan Kumar',
    userId: 'wealth123',
    email: 'karan@email.com',
    phone: '+91-9876543210',
    upiId: 'karan@upi',
    address: 'Ghaziabad, India',
    theme: 'light',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert('Profile updated successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-xl rounded-xl">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">User Profile & Settings</h1>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block text-sm font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 mb-4"
            />

            <label className="block text-sm font-semibold mb-1">User ID</label>
            <input
              type="text"
              name="userId"
              value={userData.userId}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 mb-4"
            />

            <label className="block text-sm font-semibold mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 mb-4"
            />

            <label className="block text-sm font-semibold mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 mb-4"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 mb-4"
            />

            <label className="block text-sm font-semibold mb-1">UPI ID</label>
            <input
              type="text"
              name="upiId"
              value={userData.upiId}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 mb-4"
            />

            <label className="block text-sm font-semibold mb-1">Theme</label>
            <select
              name="theme"
              value={userData.theme}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 mb-4"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>

            <label className="block text-sm font-semibold mb-1">Change Password</label>
            <input
              type="password"
              name="password"
              placeholder="New password"
              value={userData.password}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 mb-2"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={userData.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Save Changes
          </button>
          <Link
            to="/"
          className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300'>Home</Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
