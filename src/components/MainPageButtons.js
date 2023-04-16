import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function MainPageButtons() {


    
    return (
        <div className="mainPageButtons">
            <Link to='/birdlog' id="buttonLogBird">Log a Bird</Link>
            <Link to='/birdidentifier' id="buttonIDBird">ID a Bird</Link>
            <Link to='/mynests' id="buttonMyNests">My Nests</Link>
        </div>
      )
  }

  export default MainPageButtons;