import React from 'react';
import useFrom from './UseForm';

const AddGames = () => {
  const initialState = {
    gameName: '',
    gamePrice: '',
    isUnder18: '',
    gameDescription: '',
    gamePhoto: null,
  };

  const onSubmit = (formState) => {
    // Handle form submission, e.g., send data to a server
    console.log('Form Submitted:', formState);
  };

  const { formState, handleChange, handleSubmit } = useFrom(initialState, onSubmit);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full m-10">
        <h1 className="text-2xl font-bold mb-6 text-red-600">Add Games</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Game Name</label>
            <input
              type="text"
              name="gameName"
              value={formState.gameName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md border-red-400"
            />
          </div>
          <div className="grid grid-cols-2 space-x-4">
            <div className="mb-4">
              <label className="block text-gray-700">Game Price</label>
              <input
                type="text"
                name="gamePrice"
                value={formState.gamePrice}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md border-red-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Is game under 18 or not</label>
              <input
                type="text"
                name="isUnder18"
                value={formState.isUnder18}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md border-red-400"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 space-x-4">
            <div className="mb-4">
              <label className="block text-gray-700">Game Description</label>
              <textarea
                name="gameDescription"
                value={formState.gameDescription}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md resize-none border-red-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Import photo</label>
              <input
                type="file"
                name="gamePhoto"
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md border-red-400"
              />
            </div>
          </div>
          <button type="submit" className="bg-red-600 text-white px-8 py-2 rounded-md">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddGames;
