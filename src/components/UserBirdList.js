import React from "react";
import BirdCard from "./BirdCard";

function UserBirdList({userLogs, userBase, setUserLogs}) {


    const mappedUserLog = userLogs.map((userLog) => {
        return(
            <BirdCard
            setUserLogs={setUserLogs}
            userId = {userLog.user_id}
            userBase = {userBase}
            userLogs = {userLogs}
            key = {userLog.sighting_id}
            id = {userLog.sighting_id}
            birdID = {userLog.bird_id - 1} //cheeky minus1
            notes = {userLog.notes}
            image = {userLog.image}
            created_at={userLog.created_at}
            />
        )
    })

    return(
        <ul className = "birdCards">{mappedUserLog}</ul>
    )
}
  export default UserBirdList;