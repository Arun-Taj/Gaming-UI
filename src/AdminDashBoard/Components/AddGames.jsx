import React from 'react';
//<div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">

const AddGames = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full m-10">
                <h1 className="text-2xl font-bold mb-6 text-red-600">Add Games</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Game Name</label>
                        <input type="text" className="mt-1 block w-full px-4 py-2 border rounded-md border-red-400" />
                    </div>
                    <div className='grid grid-cols-2 space-x-4'>
                    <div className="mb-4">
                        <label className="block text-gray-700">Game Price</label>
                        <input type="text" className="mt-1 block w-full px-4 py-2 border rounded-md border-red-400" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Is game under 18 or not</label>
                        <input type="text" className="mt-1 block w-full px-4 py-2 border rounded-md border-red-400" />
                    </div>
                    </div>
                    <div className='grid grid-cols-2 space-x-4'>
                    <div className="mb-4">
                        <label className="block text-gray-700">Game Description</label>
                        <textarea className="mt-1 block w-full px-4 py-2 border rounded-md resize-none border-red-400"></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Import photo</label>
                        <input type="file" className="mt-1 block w-full px-4 py-2 border rounded-md border-red-400" />
                    </div>
                    </div>
                    <button type="submit" className="bg-red-600 text-white px-8 py-2 rounded-md ">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddGames;
