import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import UserBirdList from "./UserBirdList";

function MyNests({userBase, userLogs}) {

    return (
        
        <div className="myNests">
            <h1>My Nests</h1>
            <UserBirdList userLogs = {userLogs} userBase={userBase}/>
            <Link to='/' id="returnHome">Return Home</Link>
        </div>
        
      )
  }

  export default MyNests;