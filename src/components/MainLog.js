import React from "react";
import { Link } from "react-router-dom";

function MainLog({user, time, location}) {
    return (
        
        <div className="MainLog">
            <h3>Today's Sightings:</h3>
            <img src="../../public/images/greabe.png" alt='Eared_Greabe'/>
            <p> {user} | {time} | {location} </p>
            <Link to='/sightinginfo' id="sightingInfo">more info</Link>
        </div>
        
      )
  }

  export default MainLog;