import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import UserBirdList from "./UserBirdList";

function MyNests() {

    const[userLogs, setUserLogs] = useState([]);


    // Fetching the user log
    useEffect(()=>{
        fetch("/userlog")
        .then((response) => response.json())
        .then(data => setUserLogs(data))
    },[userLogs]);
    return (
        
        <div className="myNests">
            <h1>My Nests</h1>
            <UserBirdList userLogs = {userLogs}/>
            <Link to='/' id="returnHome">Return Home</Link>
        </div>
        
      )
  }

  export default MyNests;