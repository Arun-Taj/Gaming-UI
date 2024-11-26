import React, { useState } from 'react';
import { RiHome2Line } from "react-icons/ri";
import { TbBrowser } from "react-icons/tb";
import { MdLibraryAdd, MdHistory, MdSendAndArchive } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from "react-icons/fi";
import CollageFootball25 from '../../assetsUserDashBoard/CollageFootball25.jpeg';
import ClashOfRoyals2 from '../../assetsUserDashBoard/ClashOfRoyals2.jpeg';
import Pubg from '../../assetsUserDashBoard/Pubg.jpeg';
import Fc24 from '../../assetsUserDashBoard/Fc24.jpeg';
import Fortnite from '../../assetsUserDashBoard/Fortnite.jpeg';
import FallGuys from '../../assetsUserDashBoard/FallGuys.jpeg';
import NBA2k from '../../assetsUserDashBoard/NBA2k.jpeg';
import FreeFire from '../../assetsUserDashBoard/FreeFire.jpeg';


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
  { name: 'American Football', image: CollageFootball25 },
  { name: 'Clash Royal', image: ClashOfRoyals2 },
  { name: 'Pubg', image: Pubg },
  { name: 'NBA2K', image: NBA2k },
  { name: 'FallGuys', image: FallGuys},
  { name: 'FC 24', image: Fc24 },
  { name: 'FreeFire', image: FreeFire},
  { name: 'Fortnite', image: Fortnite },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Sidebar Toggle for Mobile */}
      <div className="md:hidden p-4 pt-8 cursor-pointer z-10">
        <button onClick={toggleSidebar}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Sidebar Content */}
      <div
        className={`fixed transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:relative md:translate-x-0 transition-transform duration-200 ease-in-out 
        dark:bg-gray-800 bg-lightModeBg p-4 dark:text-white text-black z-10`}
      >
        {/* Menu Header */}
        <h2 className="text-2xl font-bold mb-4 flex justify-between">
          Menu
          <p className="lg:hidden md:hidden">
            <button onClick={toggleSidebar}>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </p>
        </h2>

        {/* Links Section with Scrolling */}
        <div className="mb-6">
          <ul className="overflow-y-auto max-h-64"> {/* Limit height and enable scrolling */}
            {links.map(({ id, link, icon, Label }) => (
              <li key={id} className="mb-4 flex items-center space-x-2">
                {icon}
                <Link to={link} onClick={toggleSidebar}>
                  {Label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Installed Games Header */}
        <p className="font-bold mt-4 mb-2">Installed Games</p>

        {/* Games Section with Scrolling */}
        <div>
          <ul className="overflow-y-auto max-h-64"> {/* Limit height and enable scrolling */}
            {games.map((game, index) => (
              <li key={index} className="mb-2 flex items-center space-x-2">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-8 h-8 rounded-full border-gray-300"
                />
                <a href="#" className="hover:text-gray-400">
                  {game.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
