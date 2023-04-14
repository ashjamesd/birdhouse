import React from "react";

function BirdCard({id, key, birdID, notes, image, handleDeleteLog, userLogs}) {

    console.log(handleDeleteLog)

    function handleDeleteClick(userLogs){
        console.log({id})
        fetch(`userlog/${id}`,{
            method: "DELETE",
        })
        // .then((r)=>r.json())
        // .then((deletedLog)=>handleDeleteLog(deletedLog))
    }


    return (
        <li className = "birdCard">
            <p>{birdID}</p>
            <p>{notes}</p>
            <p>{image}</p>
            <button onClick={handleDeleteClick} >Remove from Log</button>
        </li>
      )
  }

  export default BirdCard;