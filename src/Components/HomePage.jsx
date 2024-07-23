import React from 'react';
import { FaGamepad } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-black min-h-screen flex flex-col items-center justify-center text-white">
      <nav className="flex justify-between       ">
        <div className="flex items-center">
          <div className="text-2xl font-bold">
            <FaGamepad />
            </div>
            <div className='pl-4'>|</div>
          <ul className="flex ml-6 space-x-2">
            <li className="hover:underline cursor-pointer">Explore</li>
            <li className="hover:underline cursor-pointer">New</li>
          </ul>
        </div>
        <div className="flex mx-6 items-center ">
        <IoMdSearch className='pl-' size={30}/><input
            type="text"
            placeholder="Discover new games"
            className="w-full px-2 py-2 text-black rounded-full focus:outline-none bg-slate-400"
           />
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-700 rounded">Login</button>
          <button className="px-4 py-2 bg-blue-500 rounded">Sign Up</button>
        </div>
      </nav>

      <div className="flex flex-col items-center mt-20">
        <h1 className="text-6xl font-extrabold">GET READY TO PLAY</h1>
        <p className="mt-4 text-lg">Discover Games You Love</p>
        <button className="mt-6 px-6 py-3 bg-blue-500 rounded-full text-lg hover:bg-blue-700">Play Now</button>
      </div>

      <div className="absolute bottom-10 text-center">
        <h2 className="text-2xl">Currently Trending Game</h2>
      </div>
    </div>
  );
};

export default HomePage;
