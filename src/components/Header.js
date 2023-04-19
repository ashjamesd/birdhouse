import userEvent from "@testing-library/user-event";
import React from "react";
import { Link } from "react-router-dom";

function Header({user}) {
    return (
        
        <div className="header">
            <h1 className="welcomeUser">Welcome: {user.username}</h1>
            <img className="birdsNestLogo" src="https://i.ibb.co/bb7GWcW/Birdsnest-logo.png"></img>
            <Link to="/">
                <img className="doubleBirdLogo" src="https://i.ibb.co/brKSVsq/logo.png"></img>
            </Link>
        </div>
        
      )
  }

  export default Header;