import React from "react";
import { Link } from "react-router-dom";

function MainLog({birdCard, userLogs, userBase}) {
    // if(userLog.length >1 ){

    //     console.log(userLog.length)}
    if(userLogs.length >=1){

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min)
        }
        
        let rando = getRandomInt(0, userLogs.length) //this is to get a random user log 

        console.log(rando)

        
        let randomBirdId = userLogs[rando].bird_id - 1 //this gets you a random bird id from the log so that you can use the id for info on the bird endpoint


        let assocUserId = userLogs[rando].user_id - 1

        console.log(userBase[assocUserId].username)



        // console.log(user[assocUserId])
        // console.log(randomBirdId)

        // console.log(birdCard[2])

        // console.log (birdCard[randomBirdId].common_name) //this gets you the name of the bird associated with the random log

        // console.log(userLog.)


        return (
            
            <div className="MainLog">
                <h4 className="mainLogHeader" >Select Community Log:</h4>
                <img className="mainLogImage" src={userLogs[rando].image} alt='Eared_Greabe'/>
                <p className="ticker"> Bird: {birdCard[randomBirdId].common_name} | Log Notes: {userLogs[rando].notes} |Logged by: {userBase[assocUserId].username} </p>
                {/* <Link to='/sightinginfo' id="sightingInfo" birdCard={birdCard} randomBirdId={randomBirdId} userBase={userBase} userLog={userLog} assocUserId={assocUserId}>more info</Link> */}
            </div>
            
        )
    }
    else{
        console.log("waiting")
        return(
            <h1>no birds today</h1>
        )
    }
}

 export default MainLog;