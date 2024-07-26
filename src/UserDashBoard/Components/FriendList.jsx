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
    <div className="dark:bg-gray-800 text-white p-4 sm:pl-6 md:pl-10 lg:pl-20 lg:w-1/4 xl:w-1/5">
      <div className=''>
        <p className="text-lg sm:text-xl font-bold mb-6">Online friends</p>
      </div>
      
      <ul>
        {friends.filter(friend => friend.online).map((friend, index) => (
          <li key={index} className="mb-4 flex items-center">
            <img
              src="src/assetsUserDashBoard/Fc24.jpeg" 
              alt="Profile"
              className="w-8 h-8 rounded-full border-gray-300 mr-2"
            />
            <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
            <span className="text-sm sm:text-base">{friend.name}</span>
          </li>
        ))}
      </ul>
      <p className="text-lg sm:text-xl font-bold mt-6 mb-4">Offline friends</p>
      <ul>
        {friends.filter(friend => !friend.online).map((friend, index) => (
          <li key={index} className="mb-4 flex items-center">
            <img
              src="src/assetsUserDashBoard/Fc24.jpeg" 
              alt="Profile"
              className="w-8 h-8 rounded-full border-gray-300 mr-2"
            />
            <span className="h-3 w-3 bg-red-500 rounded-full mr-2"></span>
            <span className="text-sm sm:text-base">{friend.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;
