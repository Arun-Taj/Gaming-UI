import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800  p-4 text-white">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <ul>
        <li className="mb-4"><a href="#" className="hover:text-gray-400">Store</a></li>
        <li className="mb-4"><a href="#" className="hover:text-gray-400">Browse</a></li>
        <li className="mb-4"><a href="#" className="hover:text-gray-400">Library</a></li>
        <li className="mb-4"><a href="#" className="hover:text-gray-400">History</a></li>
        <li className="mb-4"><a href="#" className="hover:text-gray-400">Achievement</a></li>
      </ul>
      <h2 className="text-2xl font-bold mt-6 mb-4">Installed Games</h2>
      <ul>
        <li className="mb-2"><a href="#" className="hover:text-gray-400">American Football</a></li>
        <li className="mb-2"><a href="#" className="hover:text-gray-400">Call of Duty</a></li>
        <li className="mb-2"><a href="#" className="hover:text-gray-400">Fortnite</a></li>
        <li className="mb-2"><a href="#" className="hover:text-gray-400">NBAK</a></li>
        <li className="mb-2"><a href="#" className="hover:text-gray-400">Rocket League</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
