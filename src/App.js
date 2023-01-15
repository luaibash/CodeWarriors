import React from 'react';
import LoginModal from './Login.js';
import Home from './components/Home.jsx';
import Desc from './components/Description.jsx';
import Listing from './components/Listings.jsx';
import Missions from './components/Missions.jsx';
import FirstMission from './components/FirstMission.jsx';
import End from './components/End.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginModal />} />
          <Route path="/home" element={<Home />} />
          <Route path="/description" element={<Desc />} />
          <Route path="/listings" element={<Listing />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/firstmission" element={<FirstMission />} />
          <Route path="/end" element={<End />} />
        </Routes>
      </BrowserRouter>
    );
  }


export default App;

