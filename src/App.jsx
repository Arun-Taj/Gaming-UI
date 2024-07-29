
import React from 'react';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignInPage';
import DashBoard from './UserDashBoard/Components/DashBoard';
import Sidebar from './UserDashBoard/Components/Sidebar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Store from './UserDashBoard/Components/MenuItems/Store'
import Achivements from './UserDashBoard/Components/MenuItems/Achivements';
import Browser from './UserDashBoard/Components/MenuItems/Browser'
import Library from './UserDashBoard/Components/MenuItems/Library'
import History from './UserDashBoard/Components/MenuItems/History';





const App = () => {
  return (
    <>
    
    <Router>
      
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/' element={<DashBoard/>}>
          <Route path='store' element={<Store />} />
          <Route path='browse' element={<Browser />} />
          <Route path='library' element={<Library />} />
          <Route path='history' element={<History />} />
          <Route path='achivements' element={<Achivements />} />
        </Route>
      </Routes>
    </Router>
      
    </>
  );
};

export default App;
