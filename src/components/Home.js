import React, {useEffect, useState} from "react";
import MainLog from './MainLog.js'
import MainPageButtons from "./MainPageButtons.js";
import BottomLogOut from "./BottomLogOut"

function Home() {

    const [log, setlog] = useState("");

    
    useEffect(()=>{
        fetch("/log",{
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response) => response.json())
        .then(setlog)
    },[]);



    return (
        <div className="home">
            <h1 className="welcome">Welcome to ______</h1>
            <MainLog user={log.user} time={log.time} location={log.location}/>
            <MainPageButtons />
            <BottomLogOut />
        </div>
      )
  }

  export default Home;