import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import { removeUser } from '../utils/userSlice';

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post(
        BASE_URL + '/logout',
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeUser());
      return navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex justify-between items-center shadow-sm">
      <Link to={'/feed'} className="flex items-center gap-2 no-underline">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 m-0">
          Assessment
        </h1>
      </Link>

      {user && (
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          <span className="hidden md:block text-gray-800 font-medium text-sm md:text-base">
            Welcome, {user.firstName}
          </span>
          <span className="md:hidden text-gray-800 font-medium text-sm">
            {user.firstName}
          </span>

          <div className="relative">
            <img
              src="/user1.png"
              alt={user.firstName}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full cursor-pointer border-2 sm:border-3 border-gray-900 object-cover"
            />

            {dropdownOpen && (
              <div className="absolute top-12 sm:top-14 right-0 bg-white border border-gray-200 rounded-xl min-w-[180px] sm:min-w-[200px] shadow-xl z-50 overflow-hidden">
                <Link
                  to={'/about'}
                  onClick={() => setDropdownOpen(false)}
                  className="flex justify-between items-center px-4 sm:px-5 py-3 sm:py-3.5 text-gray-800 no-underline border-b border-gray-200 hover:bg-gray-900 hover:text-white transition-all duration-200 text-sm sm:text-base"
                >
                  <span>About</span>
                  <span className="bg-gray-900 text-white px-1.5 sm:px-2 py-0.5 rounded-xl text-xs font-semibold">
                    New
                  </span>
                </Link>

                <div
                  onClick={() => {
                    handleLogout();
                    setDropdownOpen(false);
                  }}
                  className="px-4 sm:px-5 py-3 sm:py-3.5 text-red-500 cursor-pointer font-semibold hover:bg-red-50 transition-all duration-200 text-sm sm:text-base"
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;