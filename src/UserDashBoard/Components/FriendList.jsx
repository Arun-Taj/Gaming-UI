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
    <div className=" bg-gray-800 text-white p-4">
      <div className='flex justify-between '>
        <p className=" font-bold mb-6 ">Online friends</p>
      </div>
      
      <ul>
        {friends.filter(friend => friend.online).map((friend, index) => (
          <li key={index} className="mb-4 flex items-center">
            <img
        src="src/assetsUserDashBoard/Fc24.jpeg" 
        alt="Profile"
        className="w-8 h-8 rounded-full  border-gray-300"
      />
            <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
            {friend.name}
          </li>
        ))}
      </ul>
      <p className=" font-bold mt-6 mb-4">Offline friends</p>
      <ul>
        {friends.filter(friend => !friend.online).map((friend, index) => (
          <li key={index} className="mb-4 flex items-center"><img
          src="src/assetsUserDashBoard/Fc24.jpeg" 
          alt="Profile"
          className="w-8 h-8 rounded-full  border-gray-300"
        />
            <span className="h-3 w-3 bg-red-500 rounded-full mr-2"></span>
            {friend.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;
