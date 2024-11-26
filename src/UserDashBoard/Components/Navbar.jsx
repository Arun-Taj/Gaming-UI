import React,{useState,useRef, useEffect} from 'react';
import { FaSearch, FaBell, FaSun, FaMoon } from 'react-icons/fa';
import { FaUserCircle } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { Link } from 'react-router-dom';
import NotificationDropdown from './Notification';
import ProfileDropDown from './Profile/ProfileDropDown';


const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);


  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
    if (notificationRef.current && !notificationRef.current.contains(event.target)) {
      setIsNotificationOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <nav className="dark:bg-gray-800 sticky bg-lightModeBg dark:text-white text-black p-4 flex justify-between items-center ">
      <IoGameController size={30} className='h-10 mr-4 text-red-500 cursor-pointer' />
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
        <FaBell className="cursor-pointer" onClick={toggleNotification} />
        <div ref={notificationRef} className="absolute right-4 top-8">
        <NotificationDropdown isOpen={isNotificationOpen} toggleNotification={toggleNotification} />
      </div>
        
        <FaUserCircle className='rounded-full cursor-pointer text-black dark:text-white' onClick={toggleDropdown}/>
        <div ref={dropdownRef} className="absolute right-4 top-8">
        <ProfileDropDown isOpen={isDropdownOpen} />
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
