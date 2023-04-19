import React,{useState, useEffect} from "react";

function EditLog({userLog}) {

    console.log(userLog[0])

    // function handlePatchClick(userLogs){

        // fetch(`/userlog/${id}`),{
        //     method: "PATCH",
        //     headers:{
        //         "Content Type":"application/json"
        //     },
        //     body: JSON.stringify({
        //         notes: notes
        //     })
        // }



    return (
        
        <div>
            <a href="/editlog">
                <button className="birdIdButton">ID a Bird</button>
            </a>
        </div>
        
      )
}






export default EditLog;