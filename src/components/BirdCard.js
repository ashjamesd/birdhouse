import { useContext } from "react";
import React, {useEffect, useState} from "react";
import { birdContext } from "../App";



function BirdCard({id, key, birdID, notes, image, userLogs, created_at, userBase}) {

    const[birdCard, setBirdCard] = useContext(birdContext);
    const[patchMode, setPatchMode] = useState(false);
    const[updatedNotes, setUpdatedNotes] = useState(notes);


    useEffect(()=>{
        console.log({id})

    },[])

    useEffect(()=>{
        console.log(birdCard[id].common_name)

    },[])


    function handleDeleteClick(userLogs){
        console.log({id})
        fetch(`userlog/${id}`,{
            method: "DELETE",
        })
    }

    function handlePatchClick(){
        setPatchMode(true);
    }


    function handleSaveClick(userLogs) {
        fetch(`userlog/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ notes: updatedNotes }),
        })
          .then((response) => response.json())
          .then((data) => {
            setBirdCard((prevState) =>
              prevState.map((bird) =>
                bird.id === id ? { ...bird, notes: data.notes } : bird
              )
            );
            setPatchMode(false);
          });
      }

      function handleNotesChange(e){
        setUpdatedNotes(e.target.value)
      }

      let userlogsoneuserid = userLogs[1].user_id - 1
      // console.log(userBase[userlogsoneuserid].username)
    

    
    return (
        <li className = "birdCard">
            <p>Bird: {birdCard[birdID].common_name}</p>
            <p>Scientific Name: {birdCard[birdID].scientific_name}</p>
            <p>Spotted on: {created_at}</p>
            {patchMode ? (
                <textarea value ={updatedNotes} onChange={handleNotesChange} />
            ) : (
                <p>Notes: {notes}</p>
            )}
            <img src={image}></img>
            {/* <p>{user[userlogsoneuserid]}</p> */}
            <button onClick={handleDeleteClick} >Remove from Log</button>
            {!patchMode && <button onClick={handlePatchClick}>Edit</button>}
            {patchMode && <button onClick={handleSaveClick}>Save</button>}
        </li>
      )
  }

  export default BirdCard;