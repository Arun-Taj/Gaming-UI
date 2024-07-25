import React from 'react';
import GameCard from './GameCard';
import { FaStar } from "react-icons/fa";
import { FaFirefox } from "react-icons/fa";



const MainContent = () => {
  const games = [
  { name: 'Clash Royal', image: 'src/assetsUserDashBoard/ClashOfRoyals2.jpeg', price: 'Free' },
  { name: 'Pubg', image: 'src/assetsUserDashBoard/Pubg.jpeg', price: 'Free' },
  { name: 'FC 24', image: 'src/assetsUserDashBoard/Fc24.jpeg', price: 'Free' },
  { name: 'Fortnite', image: 'src/assetsUserDashBoard/Fortnite.jpeg', price: 'Free' },
  //{ name: 'Fall Guys', image: 'src/assetsUserDashBoard/FallGuys.jpeg', price: 'Free' },
  //{ name: 'NBA 2K', image: 'src/assetsUserDashBoard/NBA2k.jpeg', price: 'Free' },
  //{ name: 'College Football 25', image: 'src/assetsUserDashBoard/CollageFootball25.jpeg', price: 'Free' },
];
const Newgames = [
  { name: 'Clash Royal', image: 'src/assetsUserDashBoard/ClashOfRoyals2.jpeg', price: 'Free' },
  { name: 'Pubg', image: 'src/assetsUserDashBoard/Pubg.jpeg', price: 'Free' },
  { name: 'FC 24', image: 'src/assetsUserDashBoard/Fc24.jpeg', price: 'Free' },
  { name: 'Fortnite', image: 'src/assetsUserDashBoard/Fortnite.jpeg', price: 'Free' },
  { name: 'Fall Guys', image: 'src/assetsUserDashBoard/FallGuys.jpeg', price: 'Free' },
  { name: 'NBA 2K', image: 'src/assetsUserDashBoard/NBA2k.jpeg', price: 'Free' },
  { name: 'College Football 25', image: 'src/assetsUserDashBoard/CollageFootball25.jpeg', price: 'Free' },
  { name: 'Free Fire', image: 'src/assetsUserDashBoard/FreeFire.jpeg', price: 'Free' },
];

  return (
    <div className=" bg-gray-800 text-white p-6 pl-12 pr-12">
      {/* <div className="mb-6 relative "> 
      <img src="src/assets/COD.jpeg" className='rounded-lg w-full' alt="" />
      <div className='absolute top-0 left-0 right-0   text-white py-4 px-8"'>
        <h2 className="text-3xl font-bold mb-4">Call of Duty: Modern Warfare III</h2>
        <div className=" text-white p-4 rounded-lg">
           
          <h3 className="text-2xl">  Cross Gen Bundle</h3>
          <button className="mt-4 bg-red-800 py-2 px-4 rounded">Play now</button>
        </div>
      </div> 
      </div> */}
     <div className='flex items-center mb-6'>
        <FaStar className='text-red-500 mr-2' size={30} />
        <h2 className="text-2xl font-bold">Top Games</h2>
      </div>
      
      
      <div className="grid grid-cols-4 gap-4 ">
        {games.map((game, index) => (
          <GameCard key={index} name={game.name} image={game.image} price={game.price} />
        ))}
      </div>


      <div className='flex items-center mb-6 mt-10'>
        <FaFirefox className='text-red-500 mr-2' size={30} />
        <h2 className="text-2xl font-bold">New Release</h2>
      </div>
      <div className="grid grid-cols-4 gap-4 ">
        {Newgames.map((Ngame, index) => (
          <GameCard key={index} name={Ngame.name} image={Ngame.image} price={Ngame.price} />
        ))}
      </div>
    </div>
  );
}

export default MainContent;
