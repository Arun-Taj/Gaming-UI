import React from 'react';
import GameCard from '../GameCard';
import { FaStar } from "react-icons/fa";
import { FaFirefox } from "react-icons/fa";
import ClashOfRoyals2 from '../../../assetsUserDashBoard/ClashOfRoyals2.jpeg';
import Pubg from '../../../assetsUserDashBoard/Pubg.jpeg';
import Fc24 from '../../../assetsUserDashBoard/Fc24.jpeg';
import Fortnite from '../../../assetsUserDashBoard/Fortnite.jpeg';
import FallGuys from '../../../assetsUserDashBoard/FallGuys.jpeg';
import NBA2k from '../../../assetsUserDashBoard/NBA2k.jpeg';
import CollageFootball25 from '../../../assetsUserDashBoard/CollageFootball25.jpeg';
import FreeFire from '../../../assetsUserDashBoard/FreeFire.jpeg';
import AmongUs from '../../../assetsUserDashBoard/AmongUs.jpeg';
import Casino from '../../../assetsUserDashBoard/Casino.jpeg';
import CttzA5ZT from '../../../assetsUserDashBoard/CttzA5ZT.jpeg';
import Doom from '../../../assetsUserDashBoard/Doom.jpeg';
import FarCry from '../../../assetsUserDashBoard/FarCry.jpeg';
import LolCoverArt from '../../../assetsUserDashBoard/LolCoverArt.jpeg';
import RedDeadRedumption from '../../../assetsUserDashBoard/RedDeadRedemption.jpeg';


const Store = () => {
  const games = [
    { name: 'Clash Royal', image: ClashOfRoyals2, price: 'Free' },
    { name: 'Pubg', image: Pubg, price: 'Free' },
    { name: 'FC 24', image: Fc24, price: 'Free' },
    { name: 'Fortnite', image: Fortnite, price: 'Free' },
    
  ];
  
  const Newgames = [
    { name: 'Red Dead Redumption', image: RedDeadRedumption, price: 'Free' },
    { name: 'Lol-Cover-Art', image: LolCoverArt  , price: 'Free' },
    { name: 'Doom', image: Doom, price: 'Free' },
    { name: 'FarCry4', image: FarCry, price: 'Free' },
    { name: 'Fall Guys', image: FallGuys, price: 'Free' },
    { name: 'NBA 2K', image: NBA2k, price: 'Free' },
    { name: 'College Football 25', image: CollageFootball25, price: 'Free' },
    { name: 'Free Fire', image: FreeFire, price: 'Free' },
  ];

  return (
    //Top Games
    <div className="dark:bg-gray-800 bg-lightModeBg dark:text-white  text-black  p-6 w-full">
      <div className='flex items-center mb-6'>
        <FaStar className='text-red-500 mr-2' size={30} />
        <h2 className="text-2xl md:text-3xl font-bold">Top Games</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map((game, index) => (
          <GameCard key={index} name={game.name} image={game.image} price={game.price} />
        ))}
      </div>

      {/* New Release */}

      <div className='flex items-center mb-6 mt-10'>
        <FaFirefox className='text-red-500 mr-2' size={30} />
        <h2 className="text-2xl md:text-3xl font-bold">New Release</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Newgames.map((Ngame, index) => (
          <GameCard key={index} name={Ngame.name} image={Ngame.image} price={Ngame.price} />
        ))}
      </div>
    </div>
  );
}

export default Store;
