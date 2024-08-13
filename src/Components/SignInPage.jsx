import React, { useState } from "react";
import { IoGameController } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const initialFormValues = {
    username: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup'); 
  };

  const formFields = [
    { id: "username", label: "USERNAME", type: "text" },
    { id: "password", label: "PASSWORD", type: "password" }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const loggedUser = JSON.parse(localStorage.getItem("id")); // Ensure the key matches your registration key

    // Check if the entered username and password match the stored values
    if (loggedUser && formValues.username === loggedUser.username && formValues.password === loggedUser.password) {
      navigate("/");
    } else {
      // Set error messages for incorrect username/password
      setFormErrors({
        username: formValues.username===""? "User name is required!": formValues.username !== loggedUser.username ? "Incorrect username" : "",
        password: formValues.password===""? "Password is required!": formValues.password !== loggedUser.password ? "Incorrect password" : "",
      });
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  return (
    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 space-x-0 md:space-x-10 mt-10 justify-center items-center pb-16">
      {/* Left Section with Image and Text Overlay */}
      <div className="relative w-full md:w-96">
        {/* Background Image */}
        <img
          src="src/assets/Astro2.jpeg"
          className="w-full h-full rounded-2xl"
          alt="Astronaut"
        />
        {/* Text Overlay */}
        <div className="absolute top-0 left-0 right-0 text-white py-4 px-8">
          <div className="flex items-center space-x-4 mt-2">
            <IoGameController className="text-red-600" size={25} />
            <p className="text-lg font-mono font-extrabold">
              GAMING <br /> GALAXY
            </p>
          </div>
          <p className="text-lg font-mono font-extrabold">
            Explore new games and enjoy with your friends
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-white py-4 px-6">
          <p className="mt-2">@GAMING GALAXY</p>
        </div>
      </div>

      {/* Right Section with Sign In Form */}
      <form action="" onSubmit={handleLogin}>
        <div className="flex flex-col">
          <h1 className="text-4xl pb-4 font-extrabold">WELCOME BACK !</h1>
          <div className="space-y-4">
            <div className="space-x-4 items-center pb-4 flex flex-row">
              <button className="bg-slate-950 text-white rounded-3xl px-4 py-2 flex items-center ">
                <FcGoogle /> SIGN IN WITH GOOGLE
              </button>
              <button className="bg-gray-600 text-white rounded-3xl px-4 py-2 flex items-center">
                <FaFacebook /> WITH FACEBOOK
              </button>
            </div>
            
            <ul className="space-y-4">
              {formFields.map((field) => (
                <li key={field.id} className="flex flex-col">
                  <label htmlFor={field.id} className="font-bold">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    value={formValues[field.id]}
                    onChange={handleChange}
                    className="bg-slate-300 p-3 rounded-3xl pl-4 text-black"
                  />
                  {formErrors[field.id] && (
                    <span className="text-red-500">{formErrors[field.id]}</span>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <button className="bg-black text-white px-44 py-3 rounded-3xl">
                Sign In
              </button>
            </div>
            <div className="mt-4 pb-6 flex items-center">
              <p>
                Don't have an account?
                <button type="button" className="cursor-pointer text-blue-600" onClick={handleSignUpClick}>
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        </div> 
      </form>
    </div>
  );
};

export default SignIn;
