import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-6 py-10 relative">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-700">About Me</h1>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <p className="text-lg">
              👋 Hello! I'm <span className="font-semibold text-blue-600">Karan Kumar</span>, a 2nd-year undergraduate at <span className="font-semibold">Ajay Kumar Garg Engineering College (AKGEC)</span>, Ghaziabad.
            </p>
            <p className="mt-3 text-md">
              I have a strong interest in web development, finance tech, and solving real-world problems with modern tools. I'm currently building <span className="font-semibold text-green-600">Wealth-Warden</span>, a smart finance tracker.
            </p>

            <div className="mt-5 space-y-2">
              <p><FaMapMarkerAlt className="inline text-blue-600 mr-2" /> Ghaziabad, India</p>
              <p><FaEnvelope className="inline text-red-500 mr-2" /> karankumar@email.com</p>
              <p><FaPhone className="inline text-green-600 mr-2" /> +91-9876543210</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="font-semibold text-xl mb-2">Connect with me</h2>
              <div className="flex space-x-4 text-2xl">
                <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                  <FaGithub className="hover:text-gray-800" />
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
                  <FaLinkedin className="hover:text-blue-700" />
                </a>
                <a href="https://leetcode.com/yourhandle" target="_blank" rel="noreferrer">
                  <SiLeetcode className="hover:text-orange-500" />
                </a>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-xl mb-2">Skills</h2>
              <ul className="list-disc list-inside space-y-1 text-md">
                <li>React.js, Tailwind CSS, JavaScript</li>
                <li>Node.js, Express.js, MongoDB</li>
                <li>Git & GitHub, REST APIs</li>
                <li>Problem Solving (DSA), LeetCode</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-xl mb-2">Hobbies</h2>
              <p>📘 Reading tech blogs, 🎧 Listening to podcasts, 🎮 Gaming, 🧠 Brainstorming product ideas</p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          Last updated: July 2025
        </div>
      </div>
      <div className='absolute bottom-6 right-6'>
        <button
  onClick={() => navigate(-1)}
  className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition duration-300 mr-4"
>
  Back
</button>
      </div>
    </div>
  );
};

export default AboutMe;
