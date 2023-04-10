import React, {useEffect, useState} from "react";
import MainLog from './MainLog.js'
import MainPageButtons from "./MainPageButtons.js";
import BottomLogOut from "./BottomLogOut"

function Home() {

    const [data, setData] = useState("");
    
    useEffect(()=>{
        fetch("/data")
        .then((response) => response.json())
        .then(setData)
    },[]);

    console.log(data.name)

    return (
        <div className="home">
            <h1>Welcome to ourbirds</h1>
            <MainLog />
            <MainPageButtons />
            <BottomLogOut />
        </div>
      )
  }

  export default Home;