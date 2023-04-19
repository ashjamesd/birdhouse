import React from "react";
import { Link } from "react-router-dom";

function MoreInfo({birdCard, randomBirdId, userBase, userLog, assocUserId}) {
    if(userLog.length >1){    
        console.log(birdCard)
    // return (
    //     <div className="moreInfo">
    //         <h1>{userBase[assocUserId].username}'s Sighting:</h1>
    //         <p> ashjames.d | 8:12am | Brooklyn </p>
    //         <Link to='/' id="returnHome">Return Home</Link>
    //     </div>
    //   )
    }
}


  export default MoreInfo;