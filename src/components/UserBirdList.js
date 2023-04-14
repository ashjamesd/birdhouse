import React from "react";
import BirdCard from "./BirdCard";

function UserBirdList({userLogs, handleDeleteLog}) {

    // console.log(userLogs)

    const mappedUserLogs = userLogs.map((userLog) => {
        return(
            <BirdCard
            userLogs = {userLogs}
            handleDeleteLog = {handleDeleteLog} 
            key = {userLog.sighting_id}
            id = {userLog.sighting_id}
            birdID = {userLog.bird_id}
            notes = {userLog.notes}
            image = {userLog.image}/>
        )
    })

    return(
        <ul className = "birdCards">{mappedUserLogs}</ul>
    )
}
  export default UserBirdList;