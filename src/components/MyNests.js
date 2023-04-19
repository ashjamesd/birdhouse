import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import UserBirdList from "./UserBirdList";

function MyNests({userBase}) {

    const[userLogs, setUserLogs] = useState([]);


    // Fetching the user log
    useEffect(()=>{
        fetch("/userlog")
        .then((response) => response.json())
        .then(data => setUserLogs(data))
    },[userLogs]);
    return (
        
        <div className="myNests">
            <h1 className="myNestsHeader" >Community Nests</h1>
            <UserBirdList userLogs = {userLogs} userBase={userBase}/>
            <Link to='/' id="returnHome">Return Home</Link>
        </div>
        
      )
  }

  export default MyNests;