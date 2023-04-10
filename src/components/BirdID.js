import React from "react";
import { Link } from "react-router-dom";

function BirdID() {
    return (
        <div className="birdID">
            <h1>Identify a Bird</h1>
            <Link to='/' id="returnHome">Return Home</Link>

        </div>
      )
  }

  export default BirdID;