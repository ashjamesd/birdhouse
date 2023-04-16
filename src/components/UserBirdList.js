import React from "react";
import BirdCard from "./BirdCard";

function UserBirdList({userLogs}) {


    const mappedUserLogs = userLogs.map((userLog) => {
        return(
            <BirdCard
            userLogs = {userLogs}
            key = {userLog.sighting_id}
            id = {userLog.sighting_id}
            birdID = {userLog.bird_id}
            notes = {userLog.notes}
            image = {userLog.image}
            created_at={userLog.created_at}
            />
        )
    })

    return(
        <ul className = "birdCards">{mappedUserLogs}</ul>
    )
}
  export default UserBirdList;