import React from 'react'
import HomePage from './Components/HomePage'
import Signup from './Components/CreateAccount'
import SignIn from './Components/SignInPage'
import Navbar from './UserDashBoard/Components/Navbar'
import Sidebar from './UserDashBoard/Components/Sidebar'
import MainContent from './UserDashBoard/Components/MainContent'
import FriendsList from './UserDashBoard/Components/FriendList'

const App = () => {
  return (
    <>

    <div className=''>
    <Navbar/>
    <div className='flex flex-row'>
    <Sidebar/>
    <div className='w-full'>
    <MainContent />
    </div>
    <FriendsList/>
    </div>
    </div>

    {/* <div>
      <HomePage/>
    <Signup/>
    <SignIn/>
    </div> */}
    </>
    
  )
}

export default App