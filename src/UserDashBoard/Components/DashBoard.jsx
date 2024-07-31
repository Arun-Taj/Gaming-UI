import React from "react";

import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import FriendsList from "./FriendList";


const DashBoard = () => {
  const [darkMode, setDarkMode] = useState(false);
  

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    // if (isOpen) {
    //   document.documentElement.classList.remove(isOpen);
    // } else {
    //   document.documentElement.classList.add(isOpen);
    // }
  };
  return (
    <>
   
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen flex flex-col dark:bg-gray-800 bg-lightModeBg dark:text-white text-black">
          <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <div className="flex flex-grow w-full">
         
            <Sidebar className="hidden md:block md:w-1/4 lg:w-1/5" isOpen={isOpen} toggleSidebar={toggleSidebar}  />
            <div className="flex-grow sm:w-2/3 md:w-3/4 lg:w-3/5">
              <MainContent />
            </div>
            <FriendsList className="hidden lg:block lg:w-1/5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
