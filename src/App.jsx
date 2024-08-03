
import React from 'react';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignInPage';
import DashBoard from './UserDashBoard/Components/DashBoard';
import User from './AdminDashBoard/Components/User'

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Store from './UserDashBoard/Components/MenuItems/Store'
import Achievements from './UserDashBoard/Components/MenuItems/Achievements';
import Browser from './UserDashBoard/Components/MenuItems/Browser'
import Library from './UserDashBoard/Components/MenuItems/Library'
import History from './UserDashBoard/Components/MenuItems/History';
import AddGames from './AdminDashBoard/Components/AddGames';
import ErrorPage from './Components/ErrorPage';
import Calendar from './AdminDashBoard/Components/Calendar';
// import Sidebar from './UserDashBoard/Components/Sidebar';




const App = () => {
  return (
    <>
   
    
    <Router>
      
      
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/*' element={<DashBoard/>}/>
          
        <Route path='adminuser' element={<User/>}/>
        <Route path='addgames' element={<AddGames/>}/>
        <Route path='calendar' element={<Calendar/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        
      </Routes>
      
    </Router>
      
    </>
  );
};

export default App;
