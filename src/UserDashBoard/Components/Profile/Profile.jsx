import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

// Reusable Input Component
const InputField = ({ label, placeholder, type = "text", value, onChange }) => (
  <div className="flex flex-col">
    <p className="text-center">{label}</p>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="p-2 rounded-full w-full border border-gray-300"
    />
  </div>
);

// Reusable Select Component
const SelectField = ({ label, options, value, onChange }) => (
  <div className="flex flex-col">
    <p className="text-center">{label}</p>
    <select
      className="p-2 rounded-full bg-white border border-gray-300"
      value={value}
      onChange={onChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

// Reusable Contact Info Component
const ContactInfo = ({ Icon, label, info }) => (
  <div className="flex flex-col items-start">
    <div className="flex items-center gap-2 font-extrabold text-gray-600">
      <Icon className="text-lg" />
      <span>{label}</span>
    </div>
    <p className="text-gray-800 pl-6">{info}</p>
  </div>
);

const Profile = () => {
  const districts = ["Hojai", "Nagaon", "Guwahati"];
  const states = ["Assam", "Meghalaya", "West Bengal"];
  const countries = ["India", "Bangladesh", "Nepal"];

  const [logoFile, setLogoFile] = useState(null);
  const [userName, setUserName] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [Date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  
  
  const [email, setEmail] = useState("");
  const [displayedProfile, setDisplayedProfile] = useState({
    logo: null,
    userName: "",
    tagLine: "",
    
    address: "",
    phone: "",
    email: "",
  });

  const handleLogoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0]);
    }
  };

  const handleLogoUpload = () => {
    document.getElementById("logo-input").click();
  };

  const handleSubmit = () => {
    const updatedProfile = {
      logo: logoFile,
      userName,
      tagLine,
      
      
      phone,
      email,
      Date,
    };
    setDisplayedProfile(updatedProfile);
    console.log("Form Submitted:", updatedProfile);
  };

  return (
    <div className="p-4 bg-pink-100">
      <div className="flex gap-4 bg-white rounded-3xl p-2">
        <div className="flex items-center space-x-2">
          <FaRegUserCircle className="text-gray-700" />
          <span className="text-gray-700 font-medium">Profile</span>
        </div>
      </div>

      <h1 className="text-2xl font-bold mb-6 text-center mt-8">
        Update Profile
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Side */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <p className="text-center">Photo</p>
              <div className="flex flex-col bg-white items-center rounded-lg p-4 border">
                <div className="w-24 h-24 bg-gray-200 rounded-lg">
                  {logoFile && (
                    <img
                      src={URL.createObjectURL(logoFile)}
                      alt="Logo"
                      className="w-24 h-24 rounded-lg"
                    />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="logo-input"
                    onChange={handleLogoChange}
                  />
                </div>
                <button
                  className="mt-2 text-blue-500"
                  onClick={handleLogoUpload}
                >
                  Change Photo
                </button>
              </div>
            </div>

            <div className="sm:col-span-2 space-y-4">
              <InputField
                label="Your Name"
                placeholder="Name "
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <InputField
                label="Add Bio"
                placeholder="Bio"
                value={tagLine}
                onChange={(e) => setTagLine(e.target.value)}
              />
              <InputField
                label="Date Of Birth"
                
                type="date"
                value={Date}
                onChange={(e) => setDate(e.target.value)}
              />
              <InputField
                label="Email"
                placeholder="Enter Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              
              <InputField
                label="Phone No."
                placeholder="Phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            
          </div>

         
          <div className="flex justify-center pt-10">
            <button
              className="bg-pink-500 text-white p-2 px-6 rounded-full"
              onClick={handleSubmit}
            >
              Update
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-span-1">
          <div className="max-w-xs mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 bg-gray-200 rounded-md">
                {displayedProfile.logo && (
                  <img
                    src={URL.createObjectURL(displayedProfile.logo)}
                    alt="Logo"
                    className="w-24 h-24 rounded-md"
                  />
                )}
              </div>
            </div>
            <h2 className="text-xl font-bold text-center mb-2">
              {displayedProfile.userName || "John Doe"}
            </h2>
            <p className="text-gray-600 text-center mb-4">
              {displayedProfile.tagLine ||
                "Student"}
            </p>
            <hr className="my-4" />
            <div className="space-y-3">
              <ContactInfo
                Icon={FaPhoneAlt}
                label="Phone"
                info={displayedProfile.phone || "0123456789"}
              />
              <ContactInfo
                Icon={MdOutlineMailOutline}
                label="Email"
                info={displayedProfile.email || "xyzschool@gmail.com"}
              />
              <ContactInfo
                Icon={CiLocationOn}
                label="Date of Birth"
                info={
                  displayedProfile.Date ||
                  "mm/dd/yyyy"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
