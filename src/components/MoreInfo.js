import React from "react";
import { Link } from "react-router-dom";

function MoreInfo() {
    return (
        <div className="moreInfo">
            <h1>ashjames.d's Sighting:</h1>
            <Link to='/' id="returnHome">Return Home</Link>
        </div>
      )
  }

  export default MoreInfo;