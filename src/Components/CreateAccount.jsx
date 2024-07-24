import React from "react";
import { IoGameController } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
//import AstronautImage from "./assets/Astronaut.jpeg"; // Assuming you've imported the image correctly

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 space-x-0 md:space-x-10 mt-10 justify-center items-center">
      {/* Left Section with Image and Text Overlay */}
      <div className="relative w-full md:w-96">
        {/* Background Image */}
        <img
          src="src/assets/Astro.jpeg"
          className="w-full h-full rounded-2xl"
          alt="Astronaut"
        />
        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0  text-white py-4 px-6">
          <p className="text-lg font-mono font-extrabold">
            Explore new games and enjoy with your friends
          </p>
          <div className="flex items-center space-x-4 mt-2">
            <IoGameController className="text-red-600" />
            <p className="text-lg font-mono font-extrabold">
              GAMING GALAXY
            </p>
          </div>
          <p className="mt-2">@GAMING GALAXY</p>
        </div>
      </div>

      {/* Right Section with Sign Up Form */}
      <div className="flex flex-col">
        <h1 className="text-4xl pb-4 font-extrabold">CREATE AN ACCOUNT</h1>
        <div className="space-y-4">
          <div className="space-x-4 items-center pb-4 flex flex-row">
            <button className="bg-slate-950 text-white rounded-3xl px-4 py-2 flex items-center ">
            <FcGoogle />SIGN UP WITH GOOGLE
            </button>
            <button className="bg-gray-600 text-white rounded-3xl px-4 py-2 flex items-center">
            <FaFacebook />WITH FACEBOOK
            </button>
          </div>
          <ul className="space-y-4">
            <li className="flex flex-col">
              <label htmlFor="name" className="font-bold">
                NAME
              </label>
              <input
                type="text"
                id="name"
                className="bg-slate-300 p-3 rounded-3xl pl-4"
              />
            </li>
            <li className="flex flex-col">
              <label htmlFor="email" className="font-bold">
                EMAIL OR PHONE
              </label>
              <input
                type="text"
                id="email"
                className="bg-slate-300 p-3 rounded-3xl pl-4"
              />
            </li>
            <li className="flex flex-col">
              <label htmlFor="username" className="font-bold">
                USERNAME
              </label>
              <input
                type="text"
                id="username"
                className="bg-slate-300 p-3 rounded-3xl pl-4"
              />
            </li>
            <li className="flex flex-col">
              <label htmlFor="password" className="font-bold">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                className="bg-slate-300 p-3 rounded-3xl pl-4"
              />
            </li>
          </ul>
          <div className="flex items-center pt-6 space-x-2">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">Accept terms and conditions</label>
          </div>
          <div className="mt-6">
            <button className="bg-black text-white px-8 py-2 rounded-3xl">
              Sign Up
            </button>
          </div>
          <div className="mt-4">
            <p>
              Already have an account?{" "}
              <button className="cursor-pointer text-blue-600">Sign In</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
