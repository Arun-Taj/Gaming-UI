import React from 'react'
import { FaMedal } from "react-icons/fa";

const Achievements = () => {
  const acheive = [
    {
      image: 'src/assetsUserDashBoard/Fc24.jpeg',
      name: 'American Football',
      title: 'Excellent',
    },
    {
      image: 'src/assetsUserDashBoard/Fc24.jpeg',
      name: 'Clash Royal',
      title: 'Excellentt',
    },
    {
      image: 'src/assetsUserDashBoard/Pubg.jpeg',
      name: 'Pubg',
      title: 'Excellent',
    },
    {
      image: 'src/assetsUserDashBoard/Fortnite.jpeg',
      name: 'Fortnite',
      title: 'Outstanding',
    },
  ];

  return (
    <div className='p-8'>
      <p className='text-2xl font-mono font-bold'> Achievements</p>
      <ul>
        {acheive.map((achievement, index) => (
          <li key={index} className="mb-2 flex items-center justify-between  bg-red-500 p-3 rounded-lg text-white font-bold">
            <div className='flex items-center space-x-2 w-1/2'>
              <img
                src={achievement.image}
                alt={achievement.name}
                className="w-8 h-8 rounded-full border-gray-300"
              />
              <p className=' font-extrabold'>{achievement.name}</p>
            </div>
            <div className='flex items-center justify-start w-1/2'>
              <p >{achievement.title}</p> 
            </div>
             <FaMedal />
          </li>
        ))}
      </ul> 
    </div>
  );
}

export default Achievements;
