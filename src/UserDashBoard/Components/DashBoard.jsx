import React from "react";

import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import FriendsList from "./FriendList";
import Browser from "./MenuItems/Browser";
import Store from "./MenuItems/Store";
import Library from "./MenuItems/Library";
import History from "./MenuItems/History";
import Achievements from "./MenuItems/Achievements";
import { Routes, Route } from "react-router-dom";
import NotificationDropdown from "./Notification";
import Profile from "./Profile/Profile";
import AccountSetting from "./Profile/AccountSetting";
//import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

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
  };

  return (
    <>
      <div className="sticky top-0 z-20 ">
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>

      <div className={darkMode ? "dark" : ""} >
        <div className="min-h-screen flex flex-col  dark:text-white text-black">
          <div className="flex flex-grow w-full h-screen">
            {" "}
            {/* Ensures full height */}
            {/* Sidebar */}
            <Sidebar
              className="hidden md:block md:w-1/4 lg:w-1/5 overflow-hidden"
              isOpen={isOpen}
              toggleSidebar={toggleSidebar}
            />
            {/* Main Content */}
            <div className="flex-grow sm:w-2/3 md:w-3/4 lg:w-3/5 overflow-y-auto">
              <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/accountSetting" element={<AccountSetting />} />
                <Route path="/" element={<Store />} /> {/* Default route */}
                <Route path="/store" element={<Store />} />
                <Route path="/browse" element={<Browser />} />
                <Route path="/library" element={<Library />} />
                <Route path="/history" element={<History />} />
                <Route path="/achievements" element={<Achievements />} />
              </Routes>
            </div>
            {/* Friend List */}
            <FriendsList className="hidden lg:block lg:w-1/5 overflow-hidden" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
