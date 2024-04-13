import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LuEye, LuEyeOff } from "react-icons/lu";
import axios from 'axios';

import { infinity } from 'ldrs'

infinity.register()



export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading state to true when the request starts
    try {
      const response = await axios.post('http://localhost:5000/api/signin', { email, password });
      setLoading(false); // Set loading state to false when the request completes
      if (response.data === 'False') {
        setError('Invalid credentials');
      } else {
        setError('');
        navigate('/');
      }
    } catch (error) {
      setLoading(false); // Set loading state to false if there's an error
      setError('Invalid credentials');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full max-w-md">
        <div className="mb-4">
          <h1 className="text-center text-xl font-bold">Sign in</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              autoComplete="email"
              autoFocus
              required
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute right-0 px-3 py-2 focus:outline-none"
            >
              {showPassword ? <LuEye /> : <LuEyeOff />}
            </button>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox mr-2"
                value="remember"
              />
              <span className="text-sm">Remember me</span>
            </label>
          </div>

          <div className='mb-5'>
            {loading ? (
              <div className="text-center ">
                {/* // Default values shown  https://uiball.com/ldrs/ */}
                <l-infinity
                  size="55"
                  stroke="4"
                  stroke-length="0.15"
                  bg-opacity="0.1"
                  speed="1.3" 
                  color="black" 
                ></l-infinity>
              </div>
            ) : (
              error && <p className="text-sm text-red-500">{error}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={loading} // Disable the button when loading
          >
            Sign In
          </button>
        </form>
        <div className="mt-4">
          <a href="#" className="text-xs text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>
        <div className=" mt-4 flex gap-2">
          <p>Don't have an account?</p>
          <Link to="/sign-up" className=" text-blue-500 hover:underline">
             Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
