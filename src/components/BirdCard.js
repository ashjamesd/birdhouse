import { useContext } from "react";
import React, {useEffect, useState} from "react";
import { birdContext } from "../App";



function BirdCard({id, key, birdID, notes, image, userLogs, created_at}) {

    const[birdCard, setBirdCard] = useContext(birdContext);

    console.log({id})

    function handleDeleteClick(userLogs){
        console.log({id})
        fetch(`userlog/${id}`,{
            method: "DELETE",
        })
    }
    
    return (
        <li className = "birdCard">
            <p>Bird:{birdCard[id]}</p>
            <p>Spotted on: {created_at}</p>
            <p>Notes: {notes}</p>
            <p>{image}</p>

            <button onClick={handleDeleteClick} >Remove from Log</button>
        </li>
      )
  }

  export default BirdCard;