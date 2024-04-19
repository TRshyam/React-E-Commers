import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import axios from 'axios';

import { bouncy } from 'ldrs'

bouncy.register()


export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setmessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);


 const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)

    // Password validation regex
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).{8,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one special character, and one number.'
      );
            setLoading(false);

      return;
    }
        if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }


    try {
      const response = await axios.post('http://localhost:5000/api/signup', { email, password });
      console.log(response.data); // Log the response from the Flask server
            setLoading(false); // Set loading state to false when the request completes

      // alert('User signed up successfully!');
      setmessage('')
      setError('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Error signing up:', error);
            setLoading(false); // Set loading state to false if there's an error
 // Extract error message from Axios error response
    const errorMessage = error.response.data || 'Error signing up. Please try again.';
    console.log(error.response.data);

    setError(errorMessage);
    }
  };


  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full max-w-md">
        <div className="mb-4">
          <h1 className="text-center text-xl font-bold">Sign Up</h1>
        </div>
        <form onSubmit={handleSubmit} >

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
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
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
              autoComplete="new-password"
              required
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute  right-0 px-3 py-2 focus:outline-none"
            >
               {showPassword ? <LuEye /> : <LuEyeOff/>}
            </button>
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
              autoComplete="new-password"
              required
            />
            <button
              type="button"
              onClick={toggleShowConfirmPassword}
              className="absolute  right-0 px-3 py-2 focus:outline-none"
            >
               {showConfirmPassword ? <LuEye /> : <LuEyeOff/>}
            </button>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox mr-2"
                value="agree"
              />
              <span className="text-sm">I agree to the terms and conditions</span>
            </label>
          </div>
                <div className='mb-5'>
            {loading ? (
              <div className="text-center ">
                {/* // Default values shown  https://uiball.com/ldrs/ */}
                  <l-bouncy
                    size="45"
                    speed="1.75" 
                    color="blue" 
                  ></l-bouncy>

              </div>
            ) : (
              error && <p className="text-sm text-red-500 mb-4">{error}</p>
            )}
          </div>
            

          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>

        </form>
        <div className="mt-4 flex gap-2">
          <p>Already have an account?</p>
          <Link to="/sign-in" className="text-blue-500 hover:underline">
             Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
