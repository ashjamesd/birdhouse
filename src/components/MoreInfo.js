import React from "react";
import { Link } from "react-router-dom";

function MoreInfo({user,time,location}) {
    return (
        <div className="moreInfo">
            <h1>ashjames.d's Sighting:</h1>
            <p> ashjames.d | 8:12am | Brooklyn </p>
            <Link to='/' id="returnHome">Return Home</Link>
        </div>
      )
  }

  export default MoreInfo;