import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function MainPageButtons() {


    
    return (
        <div className="mainPageButtons">
            <div>
                <a href="/birdlog">
                    <button className="logABirdButton">Log a Bird</button>
                </a>
            </div>
            <div>
                <a href="/birdidentifier">
                    <button className="birdIdButton">ID a Bird</button>
                </a>
            </div>
            <div>
                <a href="/mynests">
                    <button className="myNestsButton">Community Nests</button>
                </a>
            </div>
            {/* <Link to='/birdlog' id="buttonLogBird">Log a Bird</Link>
            <Link to='/birdidentifier' id="buttonIDBird">ID a Bird</Link>
            <Link to='/mynests' id="buttonMyNests">My Nests</Link> */}
        </div>
      )
  }

  export default MainPageButtons;