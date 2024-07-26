import React from 'react'

const Achivements = () => {
    // const Achieve=[
    //     {name: 'Clash Royal', image: 'src/assetsUserDashBoard/ClashOfRoyals2.jpeg', price: 'Free'}
    // ]
  return (
    <>
    <div className='p-8'>
        <p className='text-2xl font-mono font-bold'> Achivements</p>
    <ul>
        <li className="mb-2 flex items-center justify-between space-x-2 bg-red-500 p-3 rounded-lg">
         
         <div className='flex items-center space-x-2'> 
            <img
            src="src/assetsUserDashBoard/Fc24.jpeg" 
            alt="Profile"
            className="w-8 h-8 rounded-full border-gray-300"/>
          <p className='items-center'>American Football</p>
          </div>
          <p>Excellent</p>
          <p>bravo</p>

          
        </li>
        <li className="mb-2 flex items-center justify-between space-x-2 bg-red-500 p-3 rounded-lg">
         
         <div className='flex items-center space-x-2'> 
            <img
            src="src/assetsUserDashBoard/Fc24.jpeg" 
            alt="Profile"
            className="w-8 h-8 rounded-full border-gray-300"/>
          <p className='items-center'>American Football</p>
          </div>
          <p>Excellent</p>
          <p>bravo</p>

          
        </li>
        
      </ul>
    </div>
    </>
  )
}

export default Achivements