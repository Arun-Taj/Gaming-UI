
import React from 'react';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignInPage';
import DashBoard from './UserDashBoard/Components/DashBoard';
import Sidebar from './UserDashBoard/Components/Sidebar';
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';



// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// const routes = [
//   {
//     path: '/',
//     element: <DashBoard />,
//   },
//   {
//     path: '/signin',
//     element: <SignIn />,
//   },
//   {
//     path: '/signup',
//     element: <SignUp />,
//   },
 

 
// ];

// const router = createBrowserRouter(routes);

const App = () => {
  return (
    <>
    {/* <RouterProvider router={router} /> */}
    <Router>
      
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/' element={<DashBoard/>}/>
      </Routes>
    </Router>
      
    </>
  );
};

export default App;
