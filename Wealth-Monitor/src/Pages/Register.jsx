
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
    name : "",
    password : "",
    confirm : "",
    email : "",
    username : "",
   })

   const [error, setError]= useState("");
   const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value})
   }

   const handleSubmit = async(e) => {
    e.preventDefault();

    if(formData.name.length<3){
     return setError("Enter Full name");
    }
    if(!formData.email.includes("@") || !formData.email.includes(".")){
      return setError("Enter valid email");
    }
    if(formData.password.length < 6){
       return setError("Enter a strong Password at least of the min length of 6 char")
    }
    if(formData.username.length < 4){
       return setError("Enter a Unique UserID");
    }
    if(formData.password !== formData.confirm){
       return setError("Password mismtched");
    }
    setError("");

    try{
      const res = await axios.post("http://127.0.0.1:6001/register", formData)
      alert("Registration is Successful")
      navigate('/login')
    }
    catch(err){
      if(err.response && err.response.data && err.response.data.message){
        setError(err.response.data.message);
      }
      else{
        setError("Server Error");
      }
    }
   }
  return (
    <div className='flex flex-col items-center justify-center bg-gray-500 '>
      <div className="flex flex-col justify-center rounded-2xl h-auto w-150 bg-white text-black p-8 shadow-lg mt-5 mb-5">
        <h1 className="text-2xl mb-4 font-bold text-center">REGISTER</h1>
        <p className="text-lg font-bold mb-8">Fill in your details to create your account</p>
        {error &&(<p className='text-amber-400 text-3xl text-center'>{error}</p>)}
     <form onSubmit={handleSubmit}>
        <h3 className="text-2xl text-left">Full Name</h3>
        <input type="text" 
        name = "name"
        onChange= {handleChange} 
        value={formData.name} 
        className="border p-2 rounded w-full mt-2" 
        placeholder="Enter your full name" />

        <h3 className="text-2xl mt-4 text-left">Email</h3>
        <input type="email" 
        name = "email"
        onChange={handleChange} 
        value={formData.email} 
        className="border p-2 rounded w-full mt-2" 
        placeholder="Enter your email" />

        <h3 className="text-2xl mt-4 text-left">Username</h3>
        <input type="text" 
        name = "username"
        onChange={handleChange} 
        value={formData.username} 
        className="border p-2 rounded w-full mt-2" 
        placeholder="Choose a username" />

        <h3 className="text-2xl mt-4 text-left">Password</h3>
        <input type="password" 
        name= "password"
        onChange={handleChange} 
        value={formData.password} 
        className="border p-2 rounded w-full mt-2" 
        placeholder="Create a password" />

        <h3 className="text-2xl mt-4 text-left">Confirm Password</h3>
        <input type="password" 
        name= "confirm"
        onChange={handleChange} 
        value={formData.confirm} 
        className="border p-2 rounded w-full mt-2" 
        placeholder="Confirm your password" />

        <button className="bg-green-600 text-white px-4 py-2 rounded mt-6 hover:bg-green-700 text-center">
          Register
        </button>
        </form>

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

       
 