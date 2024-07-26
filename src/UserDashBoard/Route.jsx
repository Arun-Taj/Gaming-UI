// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Complete from './Complete';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import FriendsList from './FriendList';



const AppRoutes = () => {
  return (
    <Router>
      <Complete />
      <Switch>
        <Route exact path="/" component={MainContent} />
        <Route path="/library" component={Library} />
       
      </Switch>
    </Router>
  );
};

export default AppRoutes;
