import React from "react";
import { Link } from "react-router-dom";

function MyNests() {
    return (
        
        <div className="myNests">
            <h1>My Nests</h1>
            <Link to='/' id="returnHome">Return Home</Link>
        </div>
        
      )
  }

  export default MyNests;