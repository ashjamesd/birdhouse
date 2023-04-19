import React, {useEffect, useState} from "react";
import MainLog from './MainLog.js'
import MainPageButtons from "./MainPageButtons.js";
import BottomLogOut from "./BottomLogOut"

function Home({user, handleLogout, onLogout, birdCard, userLog, userBase}) {
    
    // console.log(birdCard)
    // console.log(userLog.length)
    // const [log, setlog] = useState("");

    
    // useEffect(()=>{
    //     fetch("/log",{
    //         headers : {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         }
    //     })
    //     .then((response) => response.json())
    //     .then(setlog)
    // },[]);



    return (
        <div className="home">
            <h1 className="welcome">Welcome {user.username}</h1>
            <MainLog birdCard = {birdCard} userLog = {userLog} userBase={userBase}/>
            <MainPageButtons />
            <BottomLogOut handleLogout={handleLogout} onLogout={onLogout}/>
        </div>
      )
  }

  export default Home;