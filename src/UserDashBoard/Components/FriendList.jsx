import React from 'react';
import Fc24 from '../../assetsUserDashBoard/Fc24.jpeg';
import CollageFootball25 from '../../assetsUserDashBoard/CollageFootball25.jpeg';
import ClashOfRoyals2 from '../../assetsUserDashBoard/ClashOfRoyals2.jpeg';
import Pubg from '../../assetsUserDashBoard/Pubg.jpeg';
import Fortnite from '../../assetsUserDashBoard/Fortnite.jpeg';
import FallGuys from '../../assetsUserDashBoard/FallGuys.jpeg';
import NBA2k from '../../assetsUserDashBoard/NBA2k.jpeg';
import FreeFire from '../../assetsUserDashBoard/FreeFire.jpeg';
import AmongUs from '../../assetsUserDashBoard/AmongUs.jpeg';
import Casino from '../../assetsUserDashBoard/Casino.jpeg';
import CttzA5ZT from '../../assetsUserDashBoard/CttzA5ZT.jpeg';
import Doom from '../../assetsUserDashBoard/Doom.jpeg';
import FarCry from '../../assetsUserDashBoard/FarCry.jpeg';
import LolCoverArt from '../../assetsUserDashBoard/LolCoverArt.jpeg';
import Ludo from '../../assetsUserDashBoard/Ludo.jpeg';
import RedDeadRedemption from '../../assetsUserDashBoard/RedDeadRedemption.jpeg';
import Roblox from '../../assetsUserDashBoard/Roblox.jpeg';

const friends = [
  { name: 'User 1', image:Fc24,online: true },
  { name: 'User 2', image:Pubg,online: true },
  { name: 'User 3', image:ClashOfRoyals2,online: true },
  { name: 'User 4', image:CollageFootball25,online: true },
  { name: 'User 5', image:Fortnite,online: true },
  { name: 'User 6', image:FallGuys,online: true },
  { name: 'User 7', image:NBA2k,online: true },
  { name: 'User 1', image:FreeFire,online: false },
  { name: 'User 2', image:Roblox,online: false },
  { name: 'User 3', image:RedDeadRedemption,online: false },
  { name: 'User 4', image:Ludo,online: false },
  { name: 'User 5', image:Doom,online: false },
];

const FriendsList = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-white bg-lightModeBg text-black p-4 sm:pl-6 md:pl-10 h-full flex flex-col">
      {/* Online Friends Section */}
      <div className="flex flex-col flex-1">
        <p className="text-[14px] sm:text-lg font-bold mb-2 sticky top-0 bg-lightModeBg dark:bg-gray-800 z-10">
          Online friends
        </p>
        <ul className="overflow-y-auto max-h-64"> {/* 48 is approximately 6 items */}
          {friends.filter(friend => friend.online).map((friend, index) => (
            <li key={index} className="mb-4 flex items-center">
              <img
                src={friend.image}
                alt="Profile"
                className="w-8 h-8 rounded-full border-gray-300 mb-2 hidden sm:block"
              />
              <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
              <span className="text-[10px] sm:text-base">{friend.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Offline Friends Section */}
      <div className="flex flex-col flex-1 mt-4">
        <p className="text-[14px] sm:text-lg font-bold mb-2 sticky top-0 bg-lightModeBg dark:bg-gray-800 z-10">
          Offline friends
        </p>
        <ul className="overflow-y-auto max-h-64"> {/* 48 is approximately 6 items */}
          {friends.filter(friend => !friend.online).map((friend, index) => (
            <li key={index} className="mb-4 flex items-center">
              <img
                src={friend.image}
                alt="Profile"
                className="w-8 h-8 rounded-full border-gray-300 mb-2 hidden sm:block"
              />
              <span className="h-3 w-3 bg-red-500 rounded-full mr-2"></span>
              <span className="text-[10px] sm:text-base">{friend.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FriendsList;
