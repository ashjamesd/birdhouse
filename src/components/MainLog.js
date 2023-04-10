import React from "react";
import { Link } from "react-router-dom";

function MainLog() {
    return (
        
        <div className="MainLog">
            <h3>Today's Sightings:</h3>
            <img src="../../public/images/greabe.png" alt='Eared_Greabe'/>
            <p>ashjames.d | 10:41am | Brooklyn</p>
            <Link to='/sightinginfo' id="sightingInfo">more info</Link>
        </div>
        
      )
  }

  export default MainLog;