import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants.js';

const Login = () => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + '/signup',
        { firstName, lastName, emailId, password },
        {
          withCredentials: true,
        },
      );
      dispatch(addUser(res.data.data));
      return navigate('/feed');
    } catch (err) {
      setError(err?.response?.data?.error || 'Sign Up failed');
    }
  };

  const handleLogin = async () => {
  try {
    const res = await axios.post(
      BASE_URL + '/login',
      {
        emailId,
        password,
      },
      {
        withCredentials: true,
      },
    );
    dispatch(addUser(res.data.data));
    return navigate('/feed');
  } catch (err) {
    console.error('Login error:', err.response?.data);
    setError(err?.response?.data?.error || 'Login failed');
  }
};

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-8 bg-gray-50">
      <div className="bg-white rounded-3xl p-10 w-full max-w-lg shadow-2xl border border-gray-200">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent mb-8 text-center">
          {isLoggedIn ? 'Welcome Back' : 'Join Us'}
        </h2>

        {!isLoggedIn && (
          <>
            <div className="mb-6">
              <label className="block mb-2 text-gray-800 font-semibold">
                First Name
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
                  👤
                </span>
                <input
                  type="text"
                  required
                  placeholder="John"
                  minLength="3"
                  maxLength="30"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full py-3.5 pl-12 pr-4 border-2 border-gray-200 rounded-xl text-base text-gray-800 bg-gray-50 outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-gray-800 font-semibold">
                Last Name
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
                  👤
                </span>
                <input
                  type="text"
                  required
                  placeholder="Doe"
                  minLength="3"
                  maxLength="30"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full py-3.5 pl-12 pr-4 border-2 border-gray-200 rounded-xl text-base text-gray-800 bg-gray-50 outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>
          </>
        )}

        <div className="mb-6">
          <label className="block mb-2 text-gray-800 font-semibold">
            Email
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
              ✉️
            </span>
            <input
              type="email"
              placeholder="mail@example.com"
              required
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              className="w-full py-3.5 pl-12 pr-4 border-2 border-gray-200 rounded-xl text-base text-gray-800 bg-gray-50 outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        <div className="mb-8">
          <label className="block mb-2 text-gray-800 font-semibold">
            Password
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
              🔒
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              placeholder="••••••••"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3.5 pl-12 pr-12 border-2 border-gray-200 rounded-xl text-base text-gray-800 bg-gray-50 outline-none focus:border-indigo-500 transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-xl p-1"
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
        </div>
        
        <div className="h-6"></div>
        
        {error && (
          <p className="text-red-500 mb-4 p-3 bg-red-50 rounded-lg">{error}</p>
        )}

        <button
          onClick={isLoggedIn ? handleLogin : handleSignUp}
          className="w-full py-4 mt-4 border-none bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-xl text-lg font-bold cursor-pointer mb-6"
        >
          {isLoggedIn ? 'Sign In' : 'Create Account'}
        </button>

        <div className="text-center text-gray-500 mb-4">OR</div>

        <p
          onClick={() => setIsLoggedIn((value) => !value)}
          className="text-center text-indigo-500 cursor-pointer font-semibold hover:text-indigo-600"
        >
          {isLoggedIn
            ? "Don't have an account? Sign Up"
            : 'Already have an account? Sign In'}
        </p>
      </div>
    </div>
  );
};

export default Login;