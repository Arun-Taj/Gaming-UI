import React from "react";
import { FaGamepad } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import "./style.css";

const HomePage = () => {
  return (
    <>
      <div className="text-white min-h-screen bg-gradient-to-b from-[#151932] via-slate-900 to-[#151932] ">
        {/* navbar */}
        <nav className="w-full top-0 p-4 flex flex-col md:flex-row justify-between items-center z-10 max-w-full pl-36 pr-36">
          <div className="flex items-center space-x-8 mb-4 md:mb-0">
            <div className="text-2xl font-bold flex items-center space-x-2 cursor-pointer ">
              <FaGamepad size={30} />
              <div>|</div>
            </div>
            <ul className="flex space-x-2 text-sm md:text-base">
              <li className="hover:underline cursor-pointer text-xl">Explore</li>
              <li className="hover:underline cursor-pointer text-xl">New</li>
            </ul>
          </div>
          <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
            <IoMdSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700"
              size={20}
            />
            <input
              type="text"
              
              className="w-full pl-10 pr-4 py-2 text-black rounded-full focus:outline-none "placeholder="Discover new games"
            />
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-gray-700 rounded hover:bg-slate-800">Login</button>
            <button className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700 ">Sign Up</button>
          </div>
        </nav>

        <div className="relative flex flex-col text-white min-h-screen">
          {/* Background Image relative flex flex-col text-white min-h-screen*/}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/src/assets/clashOfClans.jpeg)" }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/50 to-slate-900"></div>
          </div>

          <div className="relative flex flex-col  mt-10 md:mt-20 pl-36 pr-36  items-start">
            <p className="text-4xl md:text-6xl font-extrabold">
              GET READY TO 
            </p>
            <p className="text-4xl md:text-6xl font-extrabold">
              PLAY 
            </p>

            <p className="mt-4 text-2xl sm:text-3xl  text-[#3351E5] font-bold">
              Discover Games You Love
            </p>
            <button className="mt-6 px-4 py-2  bg-blue-500 rounded-full text-xs md:text-lg hover:bg-blue-700 flex items-center md:mr-96">
              Play Now <FaArrowRightLong className="ml-2" />
            </button>
            
          </div>
        </div>

        <div className="pt-10 text-center w-full flex  pb-10 pl-36 pr-36">
          <p className="text-xl md:text-2xl font-bold">
            Currently Trending Game
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
