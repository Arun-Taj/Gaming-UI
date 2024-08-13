import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ensure to install react-icons using npm

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white ${isOpen ? 'w-64' : 'w-20'}`}>
      <button
        onClick={toggleSidebar}
        className="absolute top-5 right-5 text-3xl"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isOpen && (
        <div>
          <div className="profile-info p-5">
            <img src="profile.jpg" alt="Profile Image" className="rounded-full h-10 w-10" />
            <p className="mt-2">ICOM DIGITAL</p>
            <p>Development</p>
          </div>
          <ul className="menu-list">
            <li className="p-4 hover:bg-gray-700">Dashboard</li>
            <li className="p-4 hover:bg-gray-700">Revenue</li>
            <li className="p-4 hover:bg-gray-700">Notifications</li>
            <li className="p-4 hover:bg-gray-700">Analytics</li>
            <li className="p-4 hover:bg-gray-700">Likes</li>
            <li className="p-4 hover:bg-gray-700">Wallets</li>
            <li className="p-4 hover:bg-gray-700">Logout</li>
          </ul>
          <div className="p-4">
            <button onClick={() => setDarkMode(!darkMode)} className="py-2 px-4 bg-gray-600 hover:bg-gray-500 rounded">
              Toggle {darkMode ? 'Light' : 'Dark'} Mode
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
