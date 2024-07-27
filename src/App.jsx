
import React from 'react';

import HomePage from './Components/HomePage';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignInPage';
import DashBoard from './UserDashBoard/Components/DashBoard';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = [
  {
    path: '/dashboard',
    element: <DashBoard />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path:'/',
    element:<HomePage/>,
  }
  
 
];

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
