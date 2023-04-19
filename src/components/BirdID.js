// import React from "react";
// import { Link } from "react-router-dom";
// import { Dropdown } from "react-bootstrap";

// function BirdID(birdCard) {

//         let birdObject = birdCard.birdCard


//         birdObject.forEach(function(bird){
//             if (bird.body_color == 'white'){
//                 console.log(bird.common_name)
//             }
//         })

//     return (
//         <div className="birdID">
//             <h1>Identify a Bird</h1>

//             <Dropdown>
//                 <Dropdown.Toggle variant="success" id="dropdown-basic">
//                     Select a Body Color
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu>
//                     <Dropdown.Item>Black</Dropdown.Item>
//                     <Dropdown.Item>Brown</Dropdown.Item>
//                     <Dropdown.Item>White</Dropdown.Item>
//                     <Dropdown.Item>Gray</Dropdown.Item>
//                 </Dropdown.Menu>

//             </Dropdown> 
            
//             <Link to='/' id="returnHome">Return Home</Link>

//         </div>
//       )
//   }

//   export default BirdID;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

function BirdID(birdCard) {

    const[idArray, setIdArray] = useState([]);

    // const birdArray = [];

    const [selectedBodyColor, setSelectedBodyColor] = useState(""); // State variable to keep track of selected body color
    const [selectedNeckColor, setSelectedNeckColor] = useState("");
    const [selectedEyeColor, setSelectedEyeColor] = useState("");


    const handleColorSelect = (color) => {
        setSelectedBodyColor(color); // Update state with selected body color
    }

    const handleNeckColorSelect = (color) => {
        setSelectedNeckColor(color); // Update state with selected neck color
    }

    const handleEyeColorSelect = (color) => {
        setSelectedEyeColor(color); // Update state with selected eye color
    }

    let birdObject = birdCard.birdCard;

    // birdObject.forEach(function(bird){
    //     if (bird.body_color == selectedColor){ // Use state variable for comparison
            
    //         birdArray.push(bird)
    //     }
    // });

    const birdArray = birdObject.filter((bird) => {
        return bird.body_color === selectedBodyColor && bird.neck_color === selectedNeckColor && bird.eye_color === selectedEyeColor; // Use state variables for comparison
    });

    return (
        <div className="birdID">
            <h1>Identify a Bird</h1>

            <Dropdown className="dropdown">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select a Body Color
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdownBodyColor">
                    <Dropdown.Item onClick={() => handleColorSelect("black")}>Black</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleColorSelect("brown")}>Brown</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleColorSelect("white")}>White</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleColorSelect("gray")}>Gray</Dropdown.Item>
                </Dropdown.Menu>

                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select a Neck Color
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdownNeckColor">
                    <Dropdown.Item onClick={() => handleNeckColorSelect("black")}>Black</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleNeckColorSelect("brown")}>Brown</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleNeckColorSelect("white")}>White</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleNeckColorSelect("gray")}>Gray</Dropdown.Item>
                </Dropdown.Menu>

                <Dropdown.Menu className="dropdownEyeColor">
                    <Dropdown.Item onClick={() => handleEyeColorSelect("red")}>Red</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleEyeColorSelect("brown")}>Brown</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleEyeColorSelect("blue")}>Blue</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleEyeColorSelect("green")}>Green</Dropdown.Item>
                </Dropdown.Menu>

            </Dropdown> 
            
            <Link to='/' className="returnHome">Return Home</Link>
            {birdArray.map(bird => (
                <div key={bird.common_name}>
                    <p>{bird.common_name}</p>
                </div>
            ))}

        </div>
    );
}

export default BirdID;