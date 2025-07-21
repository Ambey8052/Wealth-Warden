import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-500 text-white">
            <h1 className="text-4xl font-bold mb-6">Welcome to Wealth Monitor</h1>

            <div className="flex flex-col justify-center rounded-2xl h-140 w-110 bg-white text-black p-8 shadow-xl">
                <h3 className="text-2xl mb-4 font-bold text-center">Please Login</h3>
                <p className="text-lg font-bold mb-8 text-center">
                    Enter your credentials to access your account
                </p>

                <label className="text-xl text-left mt-2">User Name</label>
                <input
                    type="text"
                    className="border p-2 rounded w-full mt-2"
                    placeholder="Enter your username"
                />

                <label className="text-xl text-left mt-4">Password</label>
                <input
                    type="password"
                    className="border p-2 rounded w-full mt-2"
                    placeholder="Enter your password"
                />

                <div className="flex flex-row justify-between w-full mt-6">
                    <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                        Login
                    </button>

                    <Link
                        to="/register"
                        className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
                    >
                        Register
                    </Link>
                </div>

                <div className="flex flex-row justify-between w-full mt-4">
                    <Link to="/forgetPass" className="underline text-sm hover:text-red-500">
                        Forgot Password
                    </Link>

                    <Link to="/change" className="underline text-sm hover:text-blue-500">
                        Change Password
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
