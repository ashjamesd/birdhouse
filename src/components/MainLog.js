import React from "react";
import { Link } from "react-router-dom";

function MainLog({birdCard, userLog}) {
    // if(userLog.length >1 ){

    //     console.log(userLog.length)}
    if(userLog.length >1){

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min)
        }
        
        let rando = getRandomInt(0, userLog.length) //this is to get a random user log 

        // console.log(rando)

        
        let randomBirdId = userLog[rando].bird_id //this gets you a random bird id from the log so that you can use the id for info on the bird endpoint

        // console.log(randomBirdId)

        console.log (birdCard[randomBirdId].common_name) //this gets you the name of the bird associated with the random log

        // console.log(userLog.)


        return (
            
            <div className="MainLog">
                <h4>Today's Sightings:</h4>
                <img src="../../public/images/greabe.png" alt='Eared_Greabe'/>
                <p> {birdCard[randomBirdId].common_name} | {userLog[rando].notes} | {} </p>
                <Link to='/sightinginfo' id="sightingInfo">more info</Link>
            </div>
            
        )
    }
    else{
        console.log("waiting")
    }
}

 export default MainLog;