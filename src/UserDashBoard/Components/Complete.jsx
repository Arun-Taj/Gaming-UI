import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import FriendsList from "./FriendList";

const Complete = () => {
 

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar  />
        <div className="flex flex-grow w-full">
         <Sidebar/>
          <div className="flex-grow lg:w-3/5">
            <MainContent />
          </div>
          <FriendsList className="hidden lg:block lg:w-1/5" />
        </div>
      </div>
    </>     
  );
};

export default Complete;
