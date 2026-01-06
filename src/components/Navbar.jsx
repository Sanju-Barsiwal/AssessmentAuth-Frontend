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
    <nav className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center shadow-sm">
      <Link to={'/'} className="flex items-center gap-2 no-underline">
        <h1 className="text-3xl font-extrabold text-gray-900 m-0">
          Assessment
        </h1>
      </Link>

      {user && (
        <div className="flex items-center gap-6">
          <span className="text-gray-800 font-medium">
            Welcome, {user.firstName}
          </span>

          <div className="relative">
            <img
              src="/user1.png"
              alt={user.firstName}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-11 h-11 rounded-full cursor-pointer border-3 border-gray-900 object-cover"
            />

            {dropdownOpen && (
              <div className="absolute top-14 right-0 bg-white border border-gray-200 rounded-xl min-w-[200px] shadow-xl z-50 overflow-hidden">
                <Link
                  to={'/about'}
                  onClick={() => setDropdownOpen(false)}
                  className="flex justify-between items-center px-5 py-3.5 text-gray-800 no-underline border-b border-gray-200 hover:bg-gray-900 hover:text-white transition-all duration-200"
                >
                  <span>About</span>
                  <span className="bg-gray-900 text-white px-2 py-0.5 rounded-xl text-xs font-semibold">
                    New
                  </span>
                </Link>

                <div
                  onClick={() => {
                    handleLogout();
                    setDropdownOpen(false);
                  }}
                  className="px-5 py-3.5 text-red-500 cursor-pointer font-semibold hover:bg-red-50 transition-all duration-200"
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