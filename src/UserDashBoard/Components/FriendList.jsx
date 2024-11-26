import React from 'react';

const friends = [
  { name: 'User 1', online: true },
  { name: 'User 2', online: true },
  { name: 'User 3', online: true },
  { name: 'User 4', online: true },
  { name: 'User 5', online: true },
  { name: 'User 6', online: true },
  { name: 'User 7', online: true },
  { name: 'User 1', online: false },
  { name: 'User 2', online: false },
  { name: 'User 3', online: false },
  { name: 'User 4', online: false },
  { name: 'User 5', online: false },
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
                src="src/assetsUserDashBoard/Fc24.jpeg"
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
                src="src/assetsUserDashBoard/Fc24.jpeg"
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
