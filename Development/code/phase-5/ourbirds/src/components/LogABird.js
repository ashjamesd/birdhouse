import React from "react";
import { Link } from "react-router-dom";

function LogABird() {
    return (
        <div className="birdLog">
            <h2>Log a Bird</h2>
            <label>Birdname:</label>
            <input type="text" id="birdName" />
            <label>Notes:</label>
            <input type="text" id="birdNotes" />
            <label>Image:</label>
            <input type="file" id="birdImage" name="birdImage" accept="image/*"/>
            <input type = "submit"/>
            <Link to='/' id="returnHome">Return Home</Link>

        </div>
      )
  }

  export default LogABird;