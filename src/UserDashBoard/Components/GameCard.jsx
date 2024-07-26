import React from 'react';

const GameCard = ({ name, image, price }) => {
  return (
    <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-80 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-600">{price}</p>
        <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg">Play now</button>
      </div>
    </div>
  );
}

export default GameCard;
