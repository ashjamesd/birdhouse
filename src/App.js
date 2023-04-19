import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import{Route, Routes, Navigate} from "react-router-dom";
import Home from './components/Home.js';
import LogABird from './components/LogABird';
import BirdID from './components/BirdID';
import MyNests from './components/MyNests';
import MoreInfo from './components/MoreInfo';
import { createContext } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import EditLog from './components/EditLog';

export const birdContext = createContext();

function App() {

  const[birdCard, setBirdCard] = useState([]);
  const [user, setUser] = useState(null);
  const[userBase, setUserBase] = useState([]);

    useEffect(()=>{
        fetch("/birds")
        .then((response) => response.json())
        .then(data => {
          // console.log(data);
          setBirdCard(data);
        })        
    },[]);

    const[userLog, setUserLog] = useState([]);

    useEffect(()=>{
        fetch("/userlog")
        .then((response) => response.json())
        .then(data => {
          // console.log(data);
          setUserLog(data);
        })        
    },[]);

    useEffect(()=>{
      fetch("/users")
      .then((response) => response.json())
      .then(data => {
        // console.log(data);
        setUserBase(data);
      })        
  },[]);

    // console.log(userBase)

    useEffect(() => {
      fetch("/checksession").then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user));
        }
      });
    }, []);

    useEffect(()=>{
      if(user){
        console.log(user.username)}
    },[user])

    function onLogout(){
      console.log(user)
      setUser('') 
      console.log(user)
    }

    
    function handleLogout(){
      fetch("/logout",{
          method: "DELETE",
      })
      .then(()=>onLogout())
  }

  if(user){
    return(
      <birdContext.Provider value = {[birdCard, setBirdCard]}>
      <Routes>
        <Route path="/" element={<Home user = {user} handleLogout={handleLogout} onLogout={onLogout} birdCard={birdCard} userLog={userLog} userBase = {userBase}/>} />
        <Route path="/sightinginfo" element={<MoreInfo/>} />
        <Route path="birdlog" element={<LogABird/>}/>
        <Route path="birdidentifier" element={<BirdID/>}/>
        <Route path="mynests" element={<MyNests/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="editlog" element={<EditLog userLog={userLog}/>}/>
      </Routes>
      </birdContext.Provider>
    )}
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
    </Routes>
  )
}

export default App;
