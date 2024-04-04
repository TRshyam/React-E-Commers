import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

export default function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = JSON.parse(localStorage.getItem('formDataArray')) || [];
    const user = userData.find((user) => user.email === email);

    if (user && user.password === password) {
      console.log('User signed in successfully');

      setError('');

      history.push('/SignUp')
    } else {
      setError('Invalid Email or Password!');
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
              autoComplete="current-password"
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
            {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>

        </form>
        <div className="mt-4">
          <a href="#" className="text-xs text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>
        <div className="mt-4">
          <Link to="/sign-up" className="text-blue-500 hover:underline">
            Don't have an account? Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

