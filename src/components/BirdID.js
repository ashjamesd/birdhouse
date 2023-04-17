import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

function BirdID() {
    return (
        <div className="birdID">
            <h1>Identify a Bird</h1>

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select a Body Color
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item>Black</Dropdown.Item>
                    <Dropdown.Item>Brown</Dropdown.Item>
                    <Dropdown.Item>White</Dropdown.Item>
                    <Dropdown.Item>Gray</Dropdown.Item>
                </Dropdown.Menu>

            </Dropdown> 
            
            <Link to='/' id="returnHome">Return Home</Link>

        </div>
      )
  }

  export default BirdID;