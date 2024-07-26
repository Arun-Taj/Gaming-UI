import React from 'react'
import HomePage from './Components/HomePage'
import Signup from './Components/CreateAccount'
import SignIn from './Components/SignInPage'
import Navbar from './UserDashBoard/Components/Navbar'
import Sidebar from './UserDashBoard/Components/Sidebar'
import MainContent from './UserDashBoard/Components/MainContent'
import FriendsList from './UserDashBoard/Components/FriendList'
import Complete from './UserDashBoard/Components/Complete'
import Achivements from './UserDashBoard/Components/MenuItems/Achivements'
// import { createBrowserRouter } from 'react-router-dom'


const App = () => {
  return (
    <>
    {/* UserDashBoard */}

   <Complete/>

      {/* <Achivements/> */}

      {/* SignUp Page and login page are in below */}

    <div>
      {/* <HomePage/> */}
    {/* <Signup/> */}
    {/* <SignIn/> */}
    </div>
    </>
    
  )
}

export default App