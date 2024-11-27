import React, { useState } from "react";
import { IoGameController } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Astro from "../assets/Astro.jpeg";

const SignUp = () => {
  const initialFormValues = {
    name: "",
    email: "",
    username: "",
    password: "",
  };

  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signin'); 
  }

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleCheckboxChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const validate = () => {
    const errors = {};

    // Name validation
    if (!formValues.name.trim()) {
      errors.name = "Name is required";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(formValues.email)) {
      errors.email = "Email is invalid";
    }

    // Username validation
    if (!formValues.username.trim()) {
      errors.username = "Username is required";
    } else if (formValues.username.length < 3) {
      errors.username = "Username must be at least 3 characters";
    }

    // Password validation
    if (!formValues.password) {
      errors.password = "Password is required";
    } else if (formValues.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    // Terms and conditions validation
    if (!termsAccepted) {
      errors.terms = "You must accept the terms and conditions";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    setIsSubmitted(true);

    if (Object.keys(errors).length === 0) {
      // Submit the form data
      console.log("Form submitted successfully", formValues);

      //storing in local storage
      localStorage.setItem("id",JSON.stringify(formValues));
      navigate("/signin")
      
      
    }
  };
  const formFields = [
    { id: "name", label: "NAME", type: "text" },
    { id: "email", label: "EMAIL OR PHONE", type: "text" },
    { id: "username", label: "USERNAME", type: "text" },
    { id: "password", label: "PASSWORD", type: "password" },
  ];

  return (
    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 space-x-0 md:space-x-10 mt-10 justify-center items-center">
      {/* Left Section with Image and Text Overlay */}
      <div className="relative w-full md:w-96">
        {/* Background Image */}
        <img
          src={Astro}
          className="w-full h-full rounded-2xl"
          alt="Astronaut"
        />
        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 rounded-xl text-white py-4 px-6">
          <p className="text-lg font-mono font-extrabold">
            Explore new games and enjoy with your friends
          </p>
          <div className="flex items-center space-x-4 mt-2">
            <IoGameController className="text-red-600" size={25} />
            <p className="text-lg font-mono font-extrabold">
              GAMING <br /> GALAXY
            </p>
          </div>
          <p className="mt-2">@GAMING GALAXY</p>
        </div>
      </div>

      {/* Right Section with Sign Up Form */}
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <h1 className="text-4xl pb-4 font-extrabold">CREATE AN ACCOUNT</h1>
        <div className="space-y-4">
          <div className="space-x-4 items-center pb-4 flex flex-row">
            <button
              type="button"
              className="bg-slate-950 text-white rounded-3xl px-4 py-2 flex items-center "
            >
              <FcGoogle />
              SIGN UP WITH GOOGLE
            </button>
            <button
              type="button"
              className="bg-gray-600 text-white rounded-3xl px-4 py-2 flex items-center"
            >
              <FaFacebook />
              WITH FACEBOOK
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
          <div className="flex items-center pt-6 space-x-2">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="terms">Accept terms and conditions</label>
          </div>
          {formErrors.terms && (
            <span className="text-red-500">{formErrors.terms}</span>
          )}
          <div className="mt-6">
            <button
              type="submit"
              className="bg-black text-white px-44 py-3 rounded-3xl"
            >
              Sign Up
            </button>
          </div>
          <div className="mt-4 pb-6">
            <p>
              Already have an account?
              <button type="button" className="cursor-pointer text-blue-600 font-extrabold" onClick={handleSignInClick}>
                Sign In
              </button>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
