import React from "react";
import BirdCard from "./BirdCard";

function UserBirdList({userLogs, userBase,seasons,birdseasons}) {


    const mappedUserLog = userLogs.map((userLog) => {

        // birdseasons.forEach((birdseason)=>{
        //     if (userLog.bird_id == birdseason.bird_id){
        //         console.log(birdseason.season_id)
        //     }
        // })

         // Find the corresponding birdlog and birdseasons data based on bird_id
         const birdlog = userLogs.find((birdlog) => birdlog.bird_id === userLog.bird_id);

        //  console.log(birdlog)

         const birdseason = birdseasons.find((birdseason) => birdseason.bird_id === birdlog.bird_id);

        //  console.log(birdseason)
 
         // Get the season name from birdseason data
         const seasonName = birdseason ? birdseason.season_id : "Unknown";

        // console.log(seasonName)

        return(
            <BirdCard
            userId = {userLog.user_id}
            userBase = {userBase}
            userLogs = {userLogs}
            key = {userLog.sighting_id}
            id = {userLog.sighting_id}
            birdID = {userLog.bird_id - 1} //cheeky minus1
            realbirdID = {userLog.bird_id}
            notes = {userLog.notes}
            image = {userLog.image}
            created_at={userLog.created_at}
            seasonName={seasonName}
            seasons={seasons}
            />
        )
    })

    return(
        <ul className = "birdCards">{mappedUserLog}</ul>
    )
}
  export default UserBirdList;