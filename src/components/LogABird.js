import React, {useState} from "react";
import { Link, useActionData } from "react-router-dom";

function LogABird() {

    const [birdName, setBirdName] = useState('');
    const [birdNotes, setBirdNotes] = useState('');
    const [birdImage, setBirdImage] = useState('');
    const [birdUser, setBirdUser] = useState('');


    //setting the state of user-inputted bird name
    function handleBirdChange(e){
        e.preventDefault();
        setBirdName(e.target.value);
    }

    //setting the state of a user-inputted sighting notes
    function handleNoteChange(e){
        e.preventDefault();
        setBirdNotes(e.target.value);
    }
    
    function handleUserChange(e){
        e.preventDefault();
        setBirdUser(e.target.value);
    } 

    function handleImageChange(e){
        e.preventDefault();
        setBirdImage(e.target.value);
    } 


    //handling the submission of the log a bird form
    function handleSubmit(e){
        e.preventDefault();
        console.log('button clicked')
        const newUserLog = {
            name: birdName,
            user: birdUser,
            notes: birdNotes,
            image: birdImage
        }

        fetch("/userlog",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newUserLog)
        }
        )
        alert("sighting logged")
    }

    return (
        <div className="userLog">
            <form onSubmit={handleSubmit} className="birdLog">
                <h2 className="logBirdTitle">Log a Bird</h2>
                <label>Birdname:</label>
                <input type="text" id="birdName" className="birdNameTitle" onChange={handleBirdChange} value={birdName}/>
                <label>Username:</label>
                <input type="text" id="birdUser" className="birdUserTitle" onChange={handleUserChange} value={birdUser}/>
                <label>Notes:</label>
                <input type="text" id="birdNotes" className="birdNotesTitle" onChange={handleNoteChange} value={birdNotes}/>
                <label>Image:</label>
                <input type="text" id="birdImage" className="birdImageTitle" onChange={handleImageChange} value={birdImage}/>
                {/* <label>Image:</label> */}
                {/* <input type="file" id="birdImage" name="birdImage" accept="image/*"/> */}
                <button type = "submit" className="logBirdSubmit">Submit</button>
                <Link to='/' id="returnHome" className="returnHome">Return Home</Link>
            </form>
        </div>
      )
  }

  export default LogABird;