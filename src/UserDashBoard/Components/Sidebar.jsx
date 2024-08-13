import React, { useState } from 'react';
import { RiHome2Line } from "react-icons/ri";
import { TbBrowser } from "react-icons/tb";
import { MdLibraryAdd, MdHistory, MdSendAndArchive } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  {
    id: 1,
    link: "/store",
    icon: <RiHome2Line />,
    Label: "Store",
    
  },
  {
    id: 2,
    link: "/browse",
    icon: <TbBrowser />,
    Label: "Browse",
    
  },
  {
    id: 3,
    link: "/library",
    icon: <MdLibraryAdd />,
    Label: "Library",
    
  },
  {
    id: 4,
    link: "/history",
    icon: <MdHistory />,
    Label: "History",
    
  },
  {
    id: 5,
    link: "/achievements",
    icon: <MdSendAndArchive />,
    Label: "Achievements",
    
  },
];

const games = [
  { name: 'American Football', image: 'src/assetsUserDashBoard/CollageFootball25.jpeg' },
  { name: 'Clash Royal', image: 'src/assetsUserDashBoard/ClashOfRoyals2.jpeg' },
  { name: 'Pubg', image: 'src/assetsUserDashBoard/Pubg.jpeg' },
  { name: 'Clash Royal', image: 'src/assetsUserDashBoard/ClashOfRoyals2.jpeg' },
  { name: 'Pubg', image: 'src/assetsUserDashBoard/Pubg.jpeg' },
  { name: 'FC 24', image: 'src/assetsUserDashBoard/Fc24.jpeg' },
  { name: 'FC 24', image: 'src/assetsUserDashBoard/Fc24.jpeg' },
  { name: 'Fortnite', image: 'src/assetsUserDashBoard/Fortnite.jpeg' },
];


const Sidebar = ({ isOpen, toggleSidebar}) => {
  

  return (
    <>
      <div className='md:hidden  p-4 pt-8 cursor-pointer z-10' >
        <button onClick={toggleSidebar}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
     
      <div className={`fixed transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition-transform duration-200 ease-in-out dark:bg-gray-800 bg-lightModeBg p-4 dark:text-white text-black z-10`}>
        <h2 className="text-2xl font-bold mb-6 flex justify-between">Menu  <p className='lg:hidden md:hidden '><button onClick={toggleSidebar}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button></p> </h2>
        <ul className=' max-h-fit min-h-fit overflow-y-scroll'>
          {links.map(({ id, link, icon, Label }) => (
            <li key={id} className="mb-4 flex items-center space-x-2">
              {icon}
              <Link to={link} onClick={toggleSidebar} >{Label}</Link>
            </li>
          ))}
        </ul>
        <p className="font-bold mt-10 mb-4">Installed Games</p>
        <ul>
          {games.map((game, index) => (
            <li key={index} className="mb-2 flex items-center space-x-2">
              <img
                src={game.image}
                alt={game.name}
                className="w-8 h-8 rounded-full border-gray-300"
              />
              <a href="#" className="hover:text-gray-400">{game.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
