import React from 'react';
import logo from './logo.svg';
import './App.css';
import{Route, Routes} from "react-router-dom";
import Home from './components/Home.js';
import LogABird from './components/LogABird';
import BirdID from './components/BirdID';
import MyNests from './components/MyNests';
import MoreInfo from './components/MoreInfo';


function App() {


  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sightinginfo" element={<MoreInfo/>} />
      <Route path="birdlog" element={<LogABird/>}/>
      <Route path="birdidentifier" element={<BirdID/>}/>
      <Route path="mynests" element={<MyNests/>}/>
    </Routes>
  )
}

export default App;
