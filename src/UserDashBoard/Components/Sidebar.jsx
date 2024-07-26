import React from 'react';
import { RiHome2Line } from "react-icons/ri";
import { TbBrowser } from "react-icons/tb";
import { MdLibraryAdd, MdHistory, MdSendAndArchive } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="dark:bg-gray-800 p-4 text-white w-full lg:w-64">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <ul>
        <li className="mb-4 flex items-center space-x-2">
          <RiHome2Line />
          <a href="#" className="hover:text-gray-400">Store</a>
        </li>
        <li className="mb-4 flex items-center space-x-2">
          <TbBrowser/>
          <a href="#" className="hover:text-gray-400">Browse</a> 
        </li>
        <li className="mb-4 flex items-center space-x-2">
          <MdLibraryAdd />
          <a href="#" className="hover:text-gray-400">Library</a>
        </li>
        <li className="mb-4 flex items-center space-x-2">
          <MdHistory />
          <a href="#" className="hover:text-gray-400">History</a>
        </li>
        <li className="mb-4 flex items-center space-x-2">
          <MdSendAndArchive />
          <a href="#" className="hover:text-gray-400">Achievement</a>
        </li>
      </ul>
      
      <p className="font-bold mt-10 mb-4">Installed Games</p>
      <ul>
        <li className="mb-2 flex items-center space-x-2">
          <img
            src="src/assetsUserDashBoard/Fc24.jpeg" 
            alt="Profile"
            className="w-8 h-8 rounded-full border-gray-300"
          />
          <a href="#" className="hover:text-gray-400">American Football</a>
        </li>
        <li className="mb-2 flex items-center space-x-2">
          <img
            src="src/assetsUserDashBoard/Fc24.jpeg" 
            alt="Profile"
            className="w-8 h-8 rounded-full border-gray-300"
          />
          <a href="#" className="hover:text-gray-400">Call of Duty</a>
        </li>
        <li className="mb-2 flex items-center space-x-2">
          <img
            src="src/assetsUserDashBoard/Fc24.jpeg" 
            alt="Profile"
            className="w-8 h-8 rounded-full border-gray-300"
          />
          <a href="#" className="hover:text-gray-400">Fortnite</a>
        </li>
        <li className="mb-2 flex items-center space-x-2">
          <img
            src="src/assetsUserDashBoard/Fc24.jpeg" 
            alt="Profile"
            className="w-8 h-8 rounded-full border-gray-300"
          />
          <a href="#" className="hover:text-gray-400">NBA 2K23</a>
        </li>
        <li className="mb-2 flex items-center space-x-2">
          <img
            src="src/assetsUserDashBoard/Fc24.jpeg" 
            alt="Profile"
            className="w-8 h-8 rounded-full border-gray-300"
          />
          <a href="#" className="hover:text-gray-400">Rocket League</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
