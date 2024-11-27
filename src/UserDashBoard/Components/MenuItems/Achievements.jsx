import React from 'react';
import { FaMedal } from "react-icons/fa";

import Fc24 from '../../../assetsUserDashBoard/Fc24.jpeg';
import Pubg from '../../../assetsUserDashBoard/Pubg.jpeg';
import Fortnite from '../../../assetsUserDashBoard/Fortnite.jpeg';
import ClashOfRoyals from '../../../assetsUserDashBoard/ClashOfRoyals.jpeg';

const Achievements = () => {
  const acheive = [
    {
      image: Fc24,
      name: 'Fc24',
      title: 'Excellent',
    },
    {
      image: ClashOfRoyals,
      name: 'Clash Of Royal',
      title: 'Excellent',
    },
    {
      image: Pubg,
      name: 'Pubg',
      title: 'Excellent',
    },
    {
      image: Fortnite,
      name: 'Fortnite',
      title: 'Outstanding',
    },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <p className="text-lg md:text-2xl lg:text-3xl font-mono font-bold mb-4 text-center">Achievements</p>
      <ul className="space-y-4">
        {acheive.map((achievement, index) => (
          <li 
            key={index} 
            className="flex items-center justify-between bg-red-500 p-3 md:p-4 rounded-lg text-white font-bold shadow-lg"
          >
            <div className="flex items-center space-x-3 w-1/2">
              <img
                src={achievement.image}
                alt={achievement.name}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-300"
              />
              <p className="text-sm md:text-base lg:text-lg">{achievement.name}</p>
            </div>
            <div className="flex items-center justify-start w-1/2 px-2 text-sm md:text-base lg:text-lg">
              <p>{achievement.title}</p>
            </div>
            <FaMedal className="text-lg md:text-xl lg:text-2xl" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
