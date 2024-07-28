import React from 'react';
import { FaSearch, FaBell, FaSun, FaMoon } from 'react-icons/fa';
import { FaUserCircle } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="dark:bg-gray-800 bg-lightModeBg dark:text-white text-black p-4 flex justify-between items-center ">
      <IoGameController size={30} className='h-10 mr-4 text-red-500' />
      <div className="flex items-center flex-grow md:flex-grow-0">
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            className="dark:bg-gray-700 bg-gray-200 text-black dark:text-white rounded-full pl-10 pr-4 py-2 focus:outline-none w-full md:w-96"
            placeholder="Search games..."
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-8 pr-6">
        <button onClick={toggleDarkMode} className="text-black dark:text-white">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <FaBell className="text-black dark:text-white" />
        <FaUserCircle className='rounded-full text-black dark:text-white' />
      </div>
    </nav>
  );
};

export default Navbar;
