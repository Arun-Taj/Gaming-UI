import React from 'react';
import { IoIosNotifications } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

const User = () => {
  return (
    <div className="flex flex-col m-10  items-center justify-center min-h-screen bg-white text-center relative ">
      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-red-600"style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-red-600"style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>
      
     
        <div className="relative  ">
          <img
            src="src/assetsUserDashBoard/NBA2k.jpeg" // replace this with the actual image URL
            alt="Profile"
            className="w-48 h-48 rounded-full border-gray-300"
          />
          
        
      </div>
      <h1 className="mt-4 text-2xl font-extrabold">ARUN GAMER</h1>
      <p className="text-red-600 font-extrabold">LOGGED IN</p>
      <div className="mt-16 space-y-8 flex flex-col items-center ">
        
      
        <button className="px-6 py-2 bg-gray-100 text-black rounded-full shadow-md flex items-center ">
          <IoIosNotifications size={25} className='text-red-600'/>SEND NOTIFICATION
        </button>
        <button className="px-6 py-2 bg-gray-100 text-black rounded-full shadow-md flex items-center ">
        <FaRegUserCircle size={25} className='text-red-600 pr-2'/>VIEW PROFILE
        </button>
      </div>
     
      <button className="absolute top-4 right-4 text-red-600 pr-10 text-sm font-bold">Back</button>
    </div>
  );
};

export default User;
//