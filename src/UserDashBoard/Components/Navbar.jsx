import React, { useState } from 'react';
import { FaSearch, FaBell, FaSun, FaMoon } from 'react-icons/fa';
import { FaUserCircle } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <nav className="dark:bg-gray-800 bg-white p-4 flex justify-between items-center">
      <IoGameController size={30} className='h-10 mr-4 text-red-500'/>
      <div className="flex items-center flex-grow md:flex-grow-0">
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            className="bg-gray-700 text-white rounded-full pl-10 pr-4 py-2 focus:outline-none w-full md:w-96"
            placeholder="Search games..."
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={toggleDarkMode} className="text-white">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <FaBell className="text-white" />
        <FaUserCircle className='rounded-full text-white'/>
      </div>
    </nav>
  );
};

export default Navbar;
