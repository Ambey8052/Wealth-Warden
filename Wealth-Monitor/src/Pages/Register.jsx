
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-gray-500 '>
      <div className="flex flex-col justify-center rounded-2xl h-auto w-150 bg-white text-black p-8 shadow-lg mt-5 mb-5">
        <h1 className="text-2xl mb-4 font-bold text-center">REGISTER</h1>
        <p className="text-lg font-bold mb-8">Fill in your details to create your account</p>

        <h3 className="text-2xl text-left">Full Name</h3>
        <input type="text" className="border p-2 rounded w-full mt-2" placeholder="Enter your full name" />

        <h3 className="text-2xl mt-4 text-left">Email</h3>
        <input type="email" className="border p-2 rounded w-full mt-2" placeholder="Enter your email" />

        <h3 className="text-2xl mt-4 text-left">Username</h3>
        <input type="text" className="border p-2 rounded w-full mt-2" placeholder="Choose a username" />

        <h3 className="text-2xl mt-4 text-left">Password</h3>
        <input type="password" className="border p-2 rounded w-full mt-2" placeholder="Create a password" />

        <h3 className="text-2xl mt-4 text-left">Confirm Password</h3>
        <input type="password" className="border p-2 rounded w-full mt-2" placeholder="Confirm your password" />

        <button className="bg-green-600 text-white px-4 py-2 rounded mt-6 hover:bg-green-700">
          Register
        </button>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 underline hover:text-blue-800">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

       
 