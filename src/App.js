import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import{Route, Routes} from "react-router-dom";
import Home from './components/Home.js';
import LogABird from './components/LogABird';
import BirdID from './components/BirdID';
import MyNests from './components/MyNests';
import MoreInfo from './components/MoreInfo';
import { createContext } from 'react';
import Login from './components/Login';
import Register from './components/Register';

export const birdContext = createContext();

function App() {

  const[birdCard, setBirdCard] = useState([]);

    useEffect(()=>{
        fetch("/birds")
        .then((response) => response.json())
        .then(data => {
          // console.log(data);
          setBirdCard(data);
        })        
    },[]);

    // useEffect(()=>{
    //   console.log(birdCard);
    // },[birdCard])

  return(
    <birdContext.Provider value = {[birdCard, setBirdCard]}>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sightinginfo" element={<MoreInfo/>} />
      <Route path="birdlog" element={<LogABird/>}/>
      <Route path="birdidentifier" element={<BirdID/>}/>
      <Route path="mynests" element={<MyNests/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
    </Routes>
    </birdContext.Provider>
  )
}

export default App;
