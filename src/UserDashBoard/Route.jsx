// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Browser from "./Components/MenuItems/Browser"
import Library from "./Components/MenuItems/Library"
import History from "./Components/MenuItems/History"
import Achivements from './Components/MenuItems/Achivements';



const Routes = () => {
  return(
    <Router>
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Routes>
          {/* <Route path="/store" element={<Store />} /> */}
          <Route path="/browse" element={<Browser />} />
          <Route path="/library" element={<Library />} />
          <Route path="/history" element={<History />} />
          <Route path="/achievements" element={<Achivements />} />
        </Routes>
      </div>
    </div>
  </Router>
  )

}
export default Routes;
